import React, { useState, useEffect } from "react";
import { Navbar, NavDropdown, Nav, Badge } from "react-bootstrap";
// import Logo from "./images/logo.png";
// import Banner from "./images/images/portalbanner.png";
import { repository } from "../utiles/repository";
import Link from "next/link";
import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import { FiChevronDown, FiBook } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Login, saveToken } from "../redux/actionMethodes/User/index";
import { useRouter } from "next/router";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import PrivateRoute from "../components/privateRoute";

import Loading from "../components/LoadingAnimation";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [userObject, setUserObject] = useState(null);
  const [userArray, setUserArray] = useState([]);
  const [books, setBooks] = useState();
  const [booksReadingTime, setBooksReadingTime] = useState("");
  const [booksDictionary, setBooksDictionary] = useState();

  const token = useSelector((x) => x.fcmToken);

  const getUserObject = (obj) => {
    setUserObject(obj);
  };

  const fetchSecondApi = async (id) => {
    try {
      const { data, status } = await repository
        .secondApi(id, token)
        .then((x) => x)
        .then((x) => x);
      if (status === 200) {
        setBooks(data.data);
      }
    } catch (error) {
      console.log("2.Error = ", error);
    }
  };

  const fetchThirdApi = async (id) => {
    try {
      const { data, status } = await repository
        .thirdApi(id, token)
        .then((x) => x)
        .then((x) => x);
      if (status === 200) {
        setBooks(data.data);
      }
    } catch (error) {
      console.log("3.Error = ", error);
    }
  };

  const fetchSixthApi = async (id) => {
    try {
      const { data, status } = await repository
        .sixthApi(id, token)
        .then((x) => x)
        .then((x) => x);
      if (status === 200) {
        setBooks(data.data);
      }
    } catch (error) {
      console.log("6.Error = ", error);
    }
  };

  const fetchBookwithCondition = (apiSpot) => {
    if (apiSpot && userObject) {
      switch (apiSpot) {
        case "reading":
          fetchSecondApi(userObject.id);
          break;
        case "completed":
          fetchThirdApi(userObject.id);
          break;
        case "all":
          fetchSixthApi(userObject.id);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    try {
      (async () => {
        const { data, status } = await repository
          .firstApi(token)
          .then((x) => x)
          .then((x) => x);
        if (status === 200) {
          setUserArray(data.data);
          setUserObject(data.data[0]);
        }
      })();
    } catch (error) {
      console.log("1.Error = ", error);
    }
  }, []);

  useEffect(() => {
    if (userObject) {
      fetchSixthApi(userObject.id);
    }
  }, [userObject]);

  const fetchFourthApi = async (id) => {
    try {
      const { data, status } = await repository
        .fourthApi(id, token)
        .then((x) => x)
        .then((x) => x);
      if (status === 200) {
        const time = data.data;
        const hours = Number(time.match(/^(\d+)/)[1]) * 60;
        const minutes = Number(time.match(/:(\d+)/)[1]) + hours;
        setBooksReadingTime(minutes.toString());
      }
    } catch (error) {
      console.log("4.Error = ", error);
    }
  };

  const fetchFifthApi = async (id) => {
    try {
      const { data, status } = await repository
        .fifthApi(id, token)
        .then((x) => x)
        .then((x) => x);
      if (status === 200) {
        console.log(data);
        setBooksDictionary(data);
      }
    } catch (error) {
      console.log("5.Error = ", error);
    }
  };

  useEffect(() => {
    fetchFourthApi(userObject?.id);
    fetchFifthApi(userObject?.id);
  }, [books, userObject]);

  return (
    <PrivateRoute>
      <div>
        <Navbar collapseOnSelect expand="lg" className="bx-shadow pl-5 pr-5">
          <Navbar.Brand as={Link} href="/" className="cst-nav-link">
            <img src="./images/logo.png" className="logo-main" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto ml-50">
              <a
                href="/"
                className="cst-nav-link-12h323 nav-link font-18 color-rgb-gray roboto-reg-16 mr-3"
              >
                Home
              </a>
              <a
                href="/about"
                className="cst-nav-link-12h323 nav-link font-18 color-rgb-gray mr-3"
              >
                About
              </a>
              <a
                href="/contact"
                className="cst-nav-link-12h323 nav-link font-18 color-rgb-gray mr-3"
              >
                Contact
              </a>
              <a
                href="/account"
                className="cst-nav-link-12h323 nav-link font-18 color-rgb-gray mr-3"
              >
                Account
              </a>
            </Nav>

            <Nav>
              <button
                onClick={() => {
                  dispatch(saveToken(null));
                  dispatch(Login(null));
                  router.replace("/");
                }}
                className="btn sgn-btn"
                style={{ backgroundColor: "white", color: "#334D5E" }}
              >
                Log out
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#FBFBFF", height: "100vh" }}
        >
          <div className="container max-width-custom">
            <div className="row">
              <div className="col-12 col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div className="mt-4">
                  <img
                    src="./images/images/portalbanner.png"
                    className="w-100"
                  />
                  {userObject !== null ? (
                    <div
                      className="d-flex"
                      style={{ backgroundColor: "#fbfbfb" }}
                    >
                      <img
                        src={userObject?.avatar}
                        className="asdfh0q-23josad custom-w-10"
                      />
                      <div className="custom-ml-rem-mob mt-2">
                        <h2 className="asdfhsdo3-fsdf hoverCLass">
                          {userObject?.first_name.concat(
                            " ",
                            userObject?.last_name
                          )}{" "}
                          <FiChevronDown
                            className="hoverCLass"
                            style={{ marginLeft: 10 }}
                          />
                          <ul className="nav__submenu">
                            {userArray && userArray.length > 0
                              ? userArray.map((item, index) => {
                                  return (
                                    <React.Fragment key={index}>
                                      <div
                                        className="row nav__submenu-item"
                                        onClick={() => {
                                          getUserObject(item);
                                        }}
                                      >
                                        <div className="col-4 col-xs-4 col-sm-4 col-md-4 col-lg-4 col-xl-4 mt-2 mb-2 pointer">
                                          <img
                                            src={item.avatar}
                                            className="w-100"
                                          />
                                        </div>
                                        <div className="col-8 col-xs-8 col-sm-8 col-md-8 col-lg-8 col-xl-8 mt-2 mb-2 pointer">
                                          <h4 className="asdfhsdo3-fsdf">
                                            {item.first_name}
                                          </h4>
                                        </div>
                                      </div>
                                    </React.Fragment>
                                  );
                                })
                              : null}
                          </ul>
                        </h2>
                        <p className="afjsdo2-32jsafjk32">Reader</p>
                      </div>
                    </div>
                  ) : null}
                  <div className="asdfhioew-23hsad-asf2 p-4 mt-3">
                    <h2 className="asdfhsdo3-fsdf">Books</h2>
                    <div className="row">
                      <div className="col-12 col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 p-0 mt-3">
                        <button
                          onClick={() => fetchBookwithCondition("reading")}
                          variant="secondary"
                          className="adsfjio324-afsd3-baf px-3 py-2 bg-new-white border-rad-25 color-get-gray p-0 mb-2"
                          style={{
                            display: "inline",
                            marginRight: "1rem",
                            fontSize: "12px",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          Currently reading
                        </button>
                        <button
                          onClick={() => fetchBookwithCondition("completed")}
                          variant="secondary"
                          className="adsfjio324-afsd3-baf px-2 py-2 color-get-gray border-rad-25"
                          style={{
                            backgroundColor: "#ebebee",
                            display: "inline",
                            fontSize: "12px",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          Books completed
                        </button>
                      </div>
                      <div className="col-6 col-xs-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 mt-2">
                        <button
                          onClick={() => fetchBookwithCondition("all")}
                          variant="secondary"
                          className="adsfjio324-afsd3-baf px-3 py-2 bg-new-white border-rad-25 color-get-gray"
                          style={{
                            fontSize: "12px",
                            outline: "none",
                            border: "none",
                            outline: "none",
                          }}
                        >
                          View All
                        </button>
                      </div>
                    </div>

                    {books && (
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={false} // means to render carousel on server-side.
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerclassName="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        dotListclassName="custom-dot-list-style"
                        itemclassName="carousel-item-padding-40-px"
                      >
                        {/* <div className="d-flex mt-4 flex-wrap"> */}
                        {books?.map((book) => (
                          <div key={book.id} className="mr-4 mt-4">
                            <img
                              src={book.picture}
                              className="img-responsive"
                              style={{
                                width: "85px",
                              }}
                            />
                          </div>
                        ))}

                        {/* </div> */}
                      </Carousel>
                    )}
                  </div>
                </div>
              </div>
              <div className="col-12 col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                <div className="mt-4">
                  <h2 className="asdfhsdo3-fsdf">
                    {userObject?.first_name.concat(" ", userObject?.last_name)}{" "}
                  </h2>
                  <div className="asdfhioew-23hsad-asf2 dsp-flex-23 pt-3 pb-3">
                    <Badge
                      variant="secondary"
                      className="asdfjo32-ccsdscnsk3423 bg-yellow"
                    >
                      <FiBook size={28} />
                    </Badge>
                    <p className="adsfjo3240c-xcxvm3 mt-3">
                      Time of book reading
                    </p>
                    <h2 className="asdf0cixjm2-sfa mt-n2">
                      {booksReadingTime && booksReadingTime !== ""
                        ? booksReadingTime
                        : ""}{" "}
                      <span> Minutes</span>
                    </h2>
                  </div>

                  <React.Fragment>
                    <h2 className="mt-4">Vocab Helper </h2>
                    <div className="asdfhioew-23hsad-asf2 dsp-flex-23  pb-3">
                      {booksDictionary?.data?.length === 0 ? (
                        <div className="mt-4 text-center">
                          <p className="p-0 m-0 font-12">
                            Words List looks empty
                          </p>
                          <p className="p-0 m-0 font-12">Come back later</p>
                        </div>
                      ) : (
                        <>
                          {booksDictionary?.data?.length > 0 && (
                            <div className="asdjasod8cmz-s23">
                              <p className="adsfjo3240c-xcxvm3 mt-3">
                                {booksDictionary.time}
                              </p>
                              <p className="adsfjo3240c-xcxvm3 mt-n3">
                                {booksDictionary.day}
                              </p>
                            </div>
                          )}
                        </>
                      )}

                      {/* <h5 className="dasfjoew839msad9c mt-2">Twirl</h5> */}
                      {/* <h5
                        className="dasfjoew839msad9c"
                        style={{ fontSize: 12 }}
                      >
                        Page {booksDictionary?.meta?.current_page}
                      </h5> */}
                    </div>
                    <div className="dsp-flex-23 mt-4 mb-3">
                      <Badge
                        variant="secondary"
                        className="adsfjio324-afsd3-baf px-3 py-2 border-rad-25"
                        style={{
                          backgroundColor: "#2092A4",
                          color: "white",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        Words List
                      </Badge>
                    </div>
                  </React.Fragment>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PrivateRoute>
  );
};
