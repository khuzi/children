import React from "react";
import { Navbar, NavDropdown, Nav, Dropdown } from "react-bootstrap";

import { useRouter } from "next/router";
import { CgFacebook } from "react-icons/cg";
import { ImInstagram, ImTwitter } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";

import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import Banner from "../components/banner";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../components/LoadingAnimation";
import { LogOut } from "../redux/actionMethodes/User";
import { NextSeo } from "next-seo";
import Head from "next/head";

export default () => {
  const user = useSelector((x) => x.User);
  const dispatch = useDispatch();
  const history = useRouter();
  const [isfixed, setrisfixed] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 68) {
      setrisfixed(true);
    } else {
      setrisfixed(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <Banner />
      <header>
        <div id="inner_header_post_thumb">
          <div className="dark_overlay">
            <div className="ml-5 mr-5 masd02-34asdsa3">
              <Navbar
                fixed={isfixed == true ? "top" : ""}
                style={{
                  backgroundColor: isfixed == true ? "#334d5e" : "",
                  color: "white",
                }}
                collapseOnSelect
                expand="lg"
                className={isfixed == true ? "" : "csty-asept5"}
              >
                <Navbar.Brand as={Link} href="/" className="cst-nav-link">
                  <img src="/images/logo1.png" className="logo-main" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-le">
                    <a
                      as={Link}
                      href="/"
                      className={`cst-nav-link color-white font-17 nav-link`}
                    >
                      Home
                    </a>
                    <a
                      as={Link}
                      href="/about"
                      className={`cst-nav-link color-white font-17 nav-link`}
                    >
                      About
                    </a>
                    <a
                      as={Link}
                      href="/features"
                      className={`cst-nav-link color-white font-17 active-3 nav-link`}
                    >
                      Features
                    </a>
                    <a
                      as={Link}
                      href="/contact"
                      className={`cst-nav-link color-white font-17 nav-link`}
                    >
                      Contact
                    </a>
                    <a
                      as={Link}
                      href="/blog"
                      className={`cst-nav-link color-white font-17 nav-link`}
                    >
                      Blog
                    </a>

                    {user && user != null ? (
                      <Dropdown>
                        <Dropdown.Toggle
                          className="btn sgn-btn"
                          style={{ backgroundColor: "white", color: "#334D5E" }}
                        >
                          Account
                        </Dropdown.Toggle>

                        <Dropdown.Menu style={{ borderRadius: 16 }}>
                          <Dropdown.Item
                            onClick={() => history.push("/account")}
                          >
                            Account
                          </Dropdown.Item>
                          <Dropdown.Item onClick={() => dispatch(LogOut())}>
                            Log Out
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    ) : (
                      <a href="/signin">
                        <button
                          className="btn sgn-btn"
                          style={{ backgroundColor: "white", color: "#334D5E" }}
                        >
                          Sign In{" "}
                        </button>
                      </a>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
              <div className="mt-16p ">
                <h1 className="asdfjop38as-sdfadsfw">
                  Features that help your child to discover new skills.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="ml-5 mr-5">
        <div className="d-flex justify-content-center align-items-center">
          <div className="container mt-5">
            <div className="row">
              <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 custom-right">
                <a href="#">
                  <img
                    className="w-38 img-responsive"
                    src="/images/images/appstore.png"
                  />
                </a>
              </div>
              <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 custom-align">
                <a href="#">
                  <img
                    className="w-38 img-responsive"
                    src="/images/images/playstore.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="dsp-flex-23">
            <h1 className="Noto-main-head text-center mt-5">Features</h1>
            <div className="asdjwei4930234-sadfds34"></div>
          </div>
          <div className="row">
            <div className="col-md-5 mission mt-5">
              <img
                src="/images/images/Parent Dashboard Section.png"
                alt="header section image"
                style={{}}
                className="img-fluid mr-4"
              />
            </div>

            <div className="col-md-6  mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Parent </span>
                  Dashboard
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                  An easy-to-use Parent Dashboard helps you view the progress
                  your child is making. From how long they have been reading for
                  to what books they are currently reading, you can track
                  everything. This feature ensures parents can keep an eye on
                  how well their children are doing and whether or not they are
                  enjoying reading.
                </p>
              </div>
            </div>
          </div>

          <div className="row ">
            <div className="col-md-6  mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Personalised </span>
                  Books
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                  With our collection of books, children can choose the main
                  character in each story to have a personalised experience.
                </p>
              </div>
            </div>
            <div className="col-md-5 mission mt-5">
              <img
                src="/images/images/personalised books.png"
                alt="header section image"
                style={{}}
                className="img-fluid mr-4"
              />
            </div>
          </div>

          <div className="mt-5">
            <img
              src="/images/images/VocabHelper.jpg"
              className="mt-5 w-100 asdf32sf9-asdnio2382jo"
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="dsp-flex-23">
          <h1 className="Noto-main-head text-center mt-5">Vocab Helper </h1>
          <div className="asdjwei4930234-sadfds34"></div>
        </div>
        <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
          We are an innovative company, driven by our passion to help children
          see themselves in the stories they read. We believe in harnessing the
          power of technology to encourage open-minded learning and effective
          reading. For children aged 2-12, we offer books designed for
          interactive reading and enjoyment.
        </p>

        <div className="ml-5 mr-5">
          <div className="row mt-5 lo90-u88gvtd67890gg">
            <div className="col-md-7  mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Interactive </span>
                  Learning
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                  We are an innovative company, driven by our passion to help
                  children see themselves in the stories they read. We believe
                  in harnessing the power of technology to encourage open-minded
                  learning and effective reading. For children aged 2-12, we
                  offer books designed for interactive reading and enjoyment.
                </p>
              </div>
            </div>

            <div className="col-md-5 mission mt-5">
              <img
                src="/images/images/glenn-carstens-peters-2.png"
                alt="header section image "
                style={{
                  borderRadius: 15,
                }}
                className="img-fluid mr-4"
              />
            </div>
          </div>
        </div>
        <div className="mt-5">
          <img
            src="/images/images/CompatibilitywithiOSandAndroid.jpeg"
            className="mt-5 w-100"
            style={{ borderRadius: 15 }}
          />
        </div>
      </div>

      <div className="container pt-2 mt-5 pb-5">
        <div className="dsp-flex-23">
          <h1 className="Noto-main-head text-center mt-5">
            Compatibility with iOS and Android{" "}
          </h1>
          <div className="asdjwei4930234-sadfds34"></div>
        </div>
      </div>
      <div className="container">
        <div className="row lo90-u88gvtd67890gg">
          <div className="col-md-7  mx-auto asdfjoew23-2342">
            <div className="reading-heading-123u9c">
              <h1 className="roboto-main-head">
                <span>On-Call User </span>
                Support
              </h1>
              <div className="asdjwei4930234-sadfds34"></div>
              <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                We are committed to offering comprehensive solutions to any
                troubleshooting issues that may arise when using our app. We
                have a member of our user support team on-call to assist should
                it be necessary simply by using our contact us page.
              </p>
            </div>
          </div>
          <div className="col-md-5 mission mt-5">
            <img
              src="/images/images/On-Call User Support.jpeg"
              alt="header section image"
              style={{ borderRadius: 15 }}
              className="img-fluid mr-4"
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-5 mission mt-5">
            <img
              src="images/images/Individual Packages.jpg"
              alt="header section image"
              style={{ borderRadius: 15 }}
              className="img-fluid mr-4"
            />
          </div>

          <div className="col-md-6  mx-auto asdfjoew23-2342">
            <div className="reading-heading-123u9c">
              <h1 className="roboto-main-head">
                <span>Individual </span>
                Packages
              </h1>
              <div className="asdjwei4930234-sadfds34"></div>
              <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                You can buy children's books individually right from the
                Inspirable app. The app is totally free and we have made it so
                that there are no annoying ads too.
              </p>
            </div>
          </div>
        </div>

        <div className="row lo90-u88gvtd67890gg ">
          <div className="col-md-6 mt-2 mx-auto asdfjoew23-2342">
            <div className="reading-heading-123u9c">
              <h1 className="roboto-main-head">
                <span>4x Profiles </span>
                per Account
              </h1>
              <div className="asdjwei4930234-sadfds34"></div>
              <p className="pt-4 mt-3 pb-2 font-22 color-rgb-gray">
                Each account will allow up to 4 profiles to be created. This
                takes into consideration families with more than one child. Each
                account represents the parent and the profile represents the
                child. This way each child can have their own personal
                experience with Inspirable.
              </p>
            </div>
          </div>
          <div className="col-md-5 mission mt-5">
            <img
              src="/images/images/4x Profiles per Account.jpeg"
              alt="header section image"
              style={{ borderRadius: 15 }}
              className="img-fluid mr-4"
            />
          </div>
        </div>
      </div>
      <div className="mt-5">
        <UpdateBox />
      </div>
      <Footer />
    </>
  );
};
