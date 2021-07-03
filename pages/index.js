import { FiArrowRight } from "react-icons/fi";
import NavBar from "../components/headersingle";
import React from "react";
import Link from "next/link";
import getTime from "reading-time";
import moment from "moment";
import { NextSeo } from "next-seo";
import Head from "next/head";

import HomeAnimation from "../components/HomeAnimation";

import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import Banner from "../components/banner";

import { Modal } from "react-bootstrap";
import { repository } from "../utiles/repository";
import { useSelector } from "react-redux";
import Loading from "../components/LoadingAnimation";
import Lottie from "react-lottie";
import animationData from "../animations/Home_page.json";
import { useRouter } from "next/router";

<Head>
  <title></title>
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  <NextSeo title="" description="" />
</Head>;

const CardDSP = ({ classname, head, title }) => {
  return (
    <div className={`card1-324sa ${classname}`}>
      <p className="text-white text-center">{head}</p>
      <p className="text-white text-center mb-5">{title}</p>
      <button className="btn text-dark mb-5 pl-3 font-weight-bold "></button>
    </div>
  );
};

const CardDSP1 = ({ image, head, title, post, x }) => {
  const navigation = useRouter();
  return (
    <div
      onClick={() => navigation.push("/blog/post/" + x.id)}
      className="card-sdafdsifhsda"
    >
      <img
        className="card-img-top overlay border-rad-10-top h2-s223"
        src={image}
        alt="Card image cap"
      />
      <div className="asdfjhi3o423-sfhaosfd">
        <FiArrowRight />
      </div>
      <div className="card-body bg-white">
        <p className="font-16 color-rgb-gray text-center">{title}</p>
        <p className="font-18 color-rgb-gray font-700 pl-2 pr-2 text-center asdoas-32-s0af3bud8cu9jw342">
          {head}
        </p>
        <p
          className="font-17 color-rgb-gray text-center"
          style={{ textDecoration: "none" }}
        >
          <u style={{ textDecoration: "none" }}>{post}</u>
        </p>
      </div>
    </div>
  );
};

export default function Home() {
  const user = useSelector((x) => x.User);
  const token = useSelector((x) => x.fcmToken);
  const [showanimation, setshowanimation] = React.useState(false);

  const [showmodal, setshowmodal] = React.useState(false);
  const [blogsmain, setBlogs] = React.useState([]);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  React.useEffect(() => {
    setshowanimation(true);
    try {
      (async () => {
        const { data, status } = await repository
          .TopBlogs()
          .then((x) => x)
          .then((x) => x);
        console.log(data, status);
        if (status == 200) {
          setBlogs(data.data);
          setshowanimation(false);
        } else {
          setshowanimation(false);
        }
      })();
    } catch (e) {
      setshowanimation(false);
    }
  }, []);
  const [isfixed, setrisfixed] = React.useState(false);
  const handleScroll = () => {
    const position = window.pageYOffset;
    if (position > 590) {
      setrisfixed(true);
    } else {
      setrisfixed(false);
    }
    console.log(position);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showanimation ? <Loading /> : <></>}

      <Banner />

      <div
        className="container-fluid header-section-asdfase8"
        style={{
          clipPath:
            isfixed == true
              ? ""
              : "polygon(0% 0%, 100% 0%, 100% 90%, 25% 100%, 0% 90%)",
        }}
      >
        <NavBar
          isHome={true}
          active="1"
          color="transparent"
          isScrollable={true}
          hasWhite={true}
        />
        <div className="ml-5 mr-5 pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12  mission desktop-margin-top">
              <div className="row">
                <div className="col-lg-2"></div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-10">
                  <h1 className="font-30 font-500 color-theme-123">
                    Reading Made Better
                  </h1>
                  <h1 className="font-30 font-600 color-theme-123">
                    <b>One Book At A Time</b>
                  </h1>
                  <p className="pt-3 font-18 pb-2">
                    Inspirable is the best place for children to discover,
                    organise, read, and engage with books!
                  </p>
                  <div className="col-lg-2"></div>
                  <div className="col-12 col-xs-12 col-sm-12 col-md-12 col-lg-10">
                    <a href="/signup" className="c-nav-link">
                      <button
                        type="button"
                        className="assailue09-234 btn bg-dark text-white asjdfasodj9sa8-as0fsa font-14"
                      >
                        Sign Up Today
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
              <div className="">
                <img
                  onClick={() => setshowmodal(true)}
                  src="/images/images/maxresdefault.jpg"
                  alt="header section image"
                  className="img-fluid img asdf034i-2349sdf23f"
                />
              </div>
              <img
                src="/images/dots.png"
                alt="header section image "
                className="img-fluid img asd-12412sadsdsd-sae"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center asdgjklru933-34asf">
        <h1 className="asdnfp3940isjaddll23">
          Start Your Child's Reading Journey Today!
        </h1>
        <div className="container">
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

      <div className="container-fluid desktop-margin-top">
        <div className="masd02-34asdsa3 ml-5 mr-5 desktop-padding-top pb-5 ">
          <div className="row">
            <div className="col-lg-0"></div>
            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-5 mb-5-custom mt-5-custom p-5">
              <HomeAnimation />
              {/* <img src={Group8878} alt="header section image" className="img-fluid img ml-3 w-80per" /> */}
            </div>

            <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-5 cl-xl-5 mission mt-5-custom pt-5-custom">
              <h1 className="asdfi383243jsd asdnfkal-sfha9u43 font-27-custom font-bold mt-3">
                Inspirable - A Mobile App That Encourages Your Child To Read
              </h1>
              <p className="pt-4 mt-3 font-18-custom color-rgb-gray pb-2">
                Inspirable is a mobile app that allows children to enjoy
                reading. We use technology to help young readers develop their
                focus and consistency that will make them a lifelong reader
              </p>

              <Link href="/about">
                <button className="btn sgn-btn sgn-btn-wht mt-3 asjdfasodj9sa8-as0fsa-1">
                  Learn More
                </button>
              </Link>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
        {/* <img src={Ellipse40} alt="header section image" className="asdf2342-sfa" /> */}
      </div>

      <section className="reading-section" style={{ position: "relative" }}>
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div class="container-fluid Cards">
          <div class="container get-max-width">
            <div class="row">
              <div class="reading-heading">
                <h1 className="roboto-main-head-323hsd text-center">
                  <span>Reading </span>
                  Age Groups
                </h1>
                <p
                  className="asdfji324-p"
                  style={{ zIndex: 100, margin: "2rem 0" }}
                >
                  Inspirable is designed to inculcate the love for reading among
                  children from different age groups.
                </p>
              </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
              <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                <CardDSP
                  head="Early Years"
                  title="2-4 years old"
                  classname="csfsa34-asfheo"
                />
              </div>
              <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                <CardDSP
                  head="First Chapter eBooks"
                  title="5-8 years old"
                  classname="csfsa34-asfheo-1"
                />
              </div>
              <div class="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-3">
                <CardDSP
                  head="Fully Fledged Readers"
                  title="9-12 years old"
                  classname="csfsa34-asfheo-2"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid  mt-3">
        <div className="container get-max-width">
          <div className="ml-5 mr-5 pt-5 pb-5">
            <div className="reading-heading">
              <h1 className="roboto-main-head-323hsd text-center">
                <span>Why </span>
                Inspirable
              </h1>
              <p className="pt-4 mt-3 asdfji324-p pb-2 text-center">
                Here's what makes Inspirable the top choice among parents.
              </p>
            </div>
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 mission">
                <img
                  src="/images/images/Educatingyounglearners.jpeg"
                  alt="header section image"
                  className="img-fluid "
                  style={{ width: "90%", borderRadius: 15 }}
                />
              </div>

              <div className="col-lg-7 col-md-7 col-sm- mb-5 mx-auto asdfjoew23-2342">
                <div className="reading-heading-123u9c">
                  <h1 className="roboto-main-head">
                    <span>Educating young learners</span>
                  </h1>
                  <div className="asdjwei4930234-sadfds34"></div>
                  <p
                    className="pt-4 mt-3 pb-2 font-18 color-rgb-gray"
                    style={{ maxWidth: "100%" }}
                  >
                    The original and illustrated books touch on topics that
                    playa part in children's lives and have an educational
                    aspect to them. Parents can monitor their child's vocabulary
                    development by checking the Parent Dashboard.
                  </p>
                </div>
              </div>
            </div>

            <div className="row lo90-u88gvtd67890gg">
              <div className="col-lg-7 col-md-7 col-sm- mb-5 mx-auto asdfjoew23-2342">
                <div className="reading-heading-123u9c">
                  <h1 className="roboto-main-head">
                    <span>Preparing children for the future</span>
                  </h1>
                  <div className="asdjwei4930234-sadfds34"></div>

                  <p
                    className="pt-4 mt-3 pb-2 font-18 color-rgb-gray"
                    style={{ maxWidth: "100%" }}
                  >
                    Books with Inspirable helps to uncover the different and
                    diverse world we all live in. Children are at times not
                    exposed to the vast métiers out there, which at times seem
                    remote. We aspire children to go further and explore what
                    later life could look like for them through stories that
                    uncover things that are not often told.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 col-sm-12 mission">
                <img
                  src="/images/images/Preparingchildrenforthefuture.jpeg"
                  alt="header section image"
                  style={{ width: "90%", borderRadius: 15 }}
                  className="img-fluid "
                />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 mission">
                <img
                  src="/images/images/Encouragingemotionaldevelopment.jpeg"
                  alt="header section image"
                  className="img-fluid "
                  style={{ width: "90%", borderRadius: 15 }}
                />
              </div>

              <div className="col-lg-7 col-md-7 col-sm- mb-5 mx-auto asdfjoew23-2342">
                <div className="reading-heading-123u9c">
                  <h1 className="roboto-main-head">
                    <span>Encouraging emotional development</span>
                  </h1>
                  <div className="asdjwei4930234-sadfds34"></div>
                  <p
                    className="pt-4 mt-3 font-18 color-rgb-gray pb-2"
                    style={{ maxWidth: "100%" }}
                  >
                    We want to encourage children's emotional development
                    through our books. For example books that speak on family
                    dynamics.
                  </p>
                </div>
              </div>
            </div>

            <div className="row lo90-u88gvtd67890gg">
              <div className="col-lg-7 col-md-7 col-sm- mb-5 mx-auto asdfjoew23-2342">
                <div className="reading-heading-123u9c">
                  <h1 className="roboto-main-head">
                    <span>Improving attentiveness</span>
                  </h1>
                  <div className="asdjwei4930234-sadfds34"></div>
                  <p
                    className="pt-4 mt-3 font-18 color-rgb-gray pb-2"
                    style={{ maxWidth: "100%" }}
                  >
                    Inspirable is the perfect tool for children who struggle to
                    remain attentive or for those who love finding new joys of
                    reading and learning.
                  </p>
                </div>
              </div>

              <div className="col-lg-5 col-md-5 col-sm-12 mission">
                <img
                  src="/images/images/Improvingattentiveness.jpeg"
                  alt="header section image"
                  style={{ width: "90%", borderRadius: 15 }}
                  className="img-fluid "
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container mt-5">
          <div className="dsp-flex-23 mb-5">
            <h1 className="roboto-main-head text-center">
              <span>Our </span>
              Latest Blogs
            </h1>
            <div className="asdjwei4930234-sadfds34"></div>
          </div>
          <div className="row mt-5 justify-content-center">
            {blogsmain.map((x, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 pl-4 mb-3">
                <CardDSP1
                  x={x}
                  image={x.image}
                  head={x.name}
                  title={`by ${x.author && x.author.name} - ${moment(
                    x.created_at
                  ).format("DD MMM yyyy")}`}
                  post={getTime(x.content).text}
                />
              </div>
            ))}
          </div>
          <div className="row">
            <div className="m-auto">
              <a href="/blog">
                <button className="btn sgn-btn sgn-btn-wht mt-5">
                  All Post
                </button>
              </a>
            </div>
          </div>

          <div className="d-flex justify-content-center align-items-center asdgjklru933-34asf">
            <h1 className="roboto-main-head text-center">
              Help us build the kind of children's reading app you can be proud
              of
            </h1>
            <h1 className="asdfi383243jsd mt-3 mb-3 text-center">
              Download the Inspirable app on iOS or Android to get started.
            </h1>
            <div className="container">
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
        </div>
      </div>
      <div className="mt-5">
        <UpdateBox />
      </div>
      <Footer />
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className=""
        show={showmodal}
        onHide={() => setshowmodal(false)}
      >
        <iframe
          height="440px"
          src="https://www.youtube.com/embed/a64U6FM9J3w?autoplay=1"
        ></iframe>
      </Modal>
    </div>
  );
}
