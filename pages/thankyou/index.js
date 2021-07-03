import React from "react";
import AuthHeader from "../../components/authNavbar";

import { FiEyeOff } from "react-icons/fi";
import Stepper from "react-stepper-horizontal";
import { useRouter } from "next/router";
// import {useLocation,useHistory} from 'react-router-dom'
import { useDispatch } from "react-redux";
import queryString from "query-string";
import Head from "next/head";
import { NextSeo } from "next-seo";

import { Login, saveToken } from "../../redux/actionMethodes/User/index";
const MainContetn = (step, handleStep) => {
  const location = undefined;
  const dispatch = useDispatch();
  const history = useRouter();
  let data = window.location.search;
  const dataGetFinal = JSON.parse(queryString.parse(data).data);

  switch (step) {
    case 1: {
      return (
        <div className="ml-5 pl-3">
          <h1 className="asfn3-4i32hs9a234-asr3">Thank You For Signing Up!</h1>
          <p className="sadsa0-12-21312jpsa">
            As a new member of the Inspirable community, we would like to give
            you a special welcome gift
          </p>
          <p className="sadsa0-12-21312jpsa">
            Check your email to receive your discount code. Using this code, you
            will be able to enjoy a 25% discount on your entire purchase.
          </p>
          <p className="sadsa0-12-21312jpsa">
            If you don’t see the email (check your spam, promotions, and spam
            folders to be sure!), reach out to us at{" "}
            <a>contactus@inspirable.io</a> and we will get it sorted right away.
          </p>
          <p className="sadsa0-12-21312jpsa">
            To avoid missing anything we send to you, it’s best to add
            hello@inspirable.io to your contact list.
          </p>
          <div className="">
            <button
              onClick={handleStep}
              className="btn sgn-btn safas02i-2-43asfsf3 mt-4"
            >
              Next
            </button>
          </div>
        </div>
      );
    }
    case 2: {
      return (
        <div className="ml-5 pl-3">
          <h1 className="asfn3-4i32hs9a234-asr3">
            Download the Inspirable App
          </h1>
          <p className="sadsa0-12-21312jpsa">
            Now, it's time to download the FREE Inspirable App.
          </p>
          <p className="sadsa0-12-21312jpsa sadf8sad2xz39043-sdf352">
            Inspirable is compatible with both iOS and Android operating
            systems.
          </p>
          <p className="sadsa0-12-21312jpsa">
            Once you have downloaded the app, you can access your account using
            the email address and password you used when signing up.
          </p>
          <div className="d-flex">
            <img src="/images/images/playstore.png" style={{ width: 120 }} />
            <img
              src="/images/images/appstore.png"
              style={{ width: 120 }}
              className="ml-2"
            />
          </div>
          <div className="">
            <button
              onClick={handleStep}
              className="btn sgn-btn safas02i-2-43asfsf3 mt-4"
            >
              Next
            </button>
          </div>
        </div>
      );
    }
    case 3: {
      return (
        <div className="ml-5 pl-3">
          <h1 className="asfn3-4i32hs9a234-asr3">Log in & Start Exploring</h1>
          <p className="sadsa0-12-21312jpsa">
            Starting out with Inspirable is as easy as downloading it. Just open
            the app, enter your login details, and tada…you are in!
          </p>
          <p className="sadsa0-12-21312jpsa sadf8sad2xz39043-sdf352">
            Enjoy exploring the world of stories and imagination with your
            child– one book at a time.
          </p>
          <p className="sadsa0-12-21312jpsa">
            <a>Don’t forget to use your 25% discount code at the checkout!</a>
          </p>
          <p className="sadsa0-12-21312jpsa">
            If you face any issues when using the app, get in touch with our
            customer support team using the contact us page where you can raise
            your issue. We will be happy to assist!
          </p>
          <div className="">
            <button
              onClick={() => {
                if (dataGetFinal.user) {
                  dispatch(Login(dataGetFinal.user));
                  dispatch(saveToken(dataGetFinal.token));
                  history.replace("/");
                }
              }}
              className="btn sgn-btn safas02i-2-43asfsf3 mt-4"
            >
              Your Account
            </button>
          </div>
        </div>
      );
    }
  }
};

export default () => {
  const [step, setStep] = React.useState(1);
  const handleStep = () => {
    setStep(step + 1);
  };
  return (
    <div
      className="sam02-3nasd9032i4jsadd34"
      style={{ paddingBottom: "13.9%" }}
    >
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <AuthHeader />
      <div className="mt-5 container">
        <div className="row ">
          <div className="col-md-4">
            <img
              src="/images/images/as28sjd.png"
              className="w-100"
              style={{ marginTop: "20%" }}
            />
          </div>
          <div className="col-md-8">
            <div style={{ width: "100%" }}>
              <div className="ml-n5">
                <Stepper
                  steps={3}
                  activeStep={step}
                  activeColor="#FFFFFF"
                  completeColor="#F3508D"
                  defaultBarColor="#FFFFFF"
                  completeBarColor="#FFFFFF"
                  barStyle="solid"
                  circleFontSize={16}
                  steps={[{ title: " " }, { title: "" }, { title: "" }]}
                />
              </div>

              {MainContetn(step, handleStep)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
