import React from "react";
import NavBar from "../components/header";
import UpdateBox from "../components/updatenewcomp";
import PrivateRoute from "../components/privateRoute";

import { HiMail } from "react-icons/hi";
import Link from "next/link";
import Footer from "../components/footer";
import Lottie from "react-lottie";
import animationData from "../animations/Home_page.json";
import Loading from "../components/LoadingAnimation";
import { NextSeo } from "next-seo";
import Head from "next/head";

const ImgBox = ({ src, title }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column cst-sdfj3i-box">
      <img src={src} />
      <p className="mt-2">{title}</p>
    </div>
  );
};

export default () => {
  const [showanimation, setshowanimation] = React.useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <PrivateRoute>
      <div>
        {showanimation ? <Loading /> : <></>}
        <Head>
          <title></title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <NextSeo title="" description="" />
        </Head>
        <NavBar
          hastop={true}
          hassubtitle={false}
          title="My"
          titleSpan="Account"
        />
        <div className="mt-5 mb-5 mst-cmn-question-bx container d-flex justify-content-center">
          <h2 className="nunito-reg-28 text-center">
            Tell a friend or family member about us!{" "}
          </h2>
          {/* <button className="btn sgn-btn sgn-btn-wht mt-3">Invite</button> */}
        </div>
        <div className="mt-5 mb-5 mst-cmn-question-bx container">
          <div className="row d-flex  justify-content-center">
            <div className="col-md-2 mt-1 as-3289dfas-12sadjia28238sad">
              <button className="btn">
                <Link href="/details">
                  <a>
                    <ImgBox src="/images/icons/msk-16.png" title="My Details" />
                  </a>
                </Link>
              </button>
            </div>
            <div className="col-md-2 mt-1 as-3289dfas-12sadjia28238sad">
              <button className="btn">
                <Link href="/orderhistory">
                  <a>
                    <ImgBox
                      src={"/images/icons/msk-17.png"}
                      title="Order History"
                    />
                  </a>
                </Link>
              </button>
            </div>
            <div className="col-md-2 mt-1 as-3289dfas-12sadjia28238sad">
              <button className="btn">
                <Link href="/faq">
                  <a>
                    <ImgBox src="/images/icons/msk-14.png" title="FAQ's" />
                  </a>
                </Link>
              </button>
            </div>
            <div className="col-md-2 mt-1 as-3289dfas-12sadjia28238sad">
              <button className="btn">
                <Link href="/blog">
                  <a>
                    <ImgBox src="/images/icons/msk-18.png" title="Blog Pages" />
                  </a>
                </Link>
              </button>
            </div>
            <div className="col-md-2 mt-1 as-3289dfas-12sadjia28238sad">
              <button className="btn">
                <Link href="/parentDashboard">
                  <a>
                    <ImgBox
                      src={"/images/icons/msk-19.png"}
                      title="Parent Dashboard"
                    />
                  </a>
                </Link>
              </button>
            </div>
          </div>
        </div>
        <UpdateBox />
        <Footer />
      </div>
    </PrivateRoute>
  );
};
