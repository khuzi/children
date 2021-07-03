import React from "react";
import AuthHeader from "../components/authNavbar";

import { FiEyeOff } from "react-icons/fi";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { repository } from "../utiles/repository";
import { useDispatch } from "react-redux";
import { Login, saveToken } from "../redux/actionMethodes/User/index";
import Loading from "../components/LoadingAnimation";
import { Toast } from "react-bootstrap";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import Head from "next/head";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  first_name: Yup.string().required("Required"),
  last_name: Yup.string().required("Required"),
  email: Yup.string().required("Required").email(),
  password: Yup.string()
    .required("Required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),

  password_confirmation: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
});
export default () => {
  const dispatch = useDispatch();
  const history = useRouter();
  const [showpassword, setshowpassword] = React.useState(false);
  const [showpassword1, setshowpassword1] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [showmessage, setshowmessage] = React.useState(false);
  const [message, setmessage] = React.useState("");

  const postCat = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository
      .register(datapost)
      .then((x) => x)
      .then((x) => x);
    if (status == 200) {
      await repository
        .contacts(data)
        .then((x) => x)
        .then((x) => x);
      setshowanimation(false);

      // history.push({
      //   pathname: "thankyou/",
      //   query: {
      //     data: JSON.stringify({ user: data.me, token: data.access_token }),
      //   },
      // });
      history.push("/emailConfirmation");
    } else {
      setmessage("Something went wrong");
      setshowmessage(true);
      setshowanimation(false);
    }
  };
  return (
    <div>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      {showmessage ? (
        <Toast
          style={{
            position: "fixed",
            top: 10,
            right: 10,
          }}
        >
          <Toast.Header onClick={() => setshowmessage(false)}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Inspirable</strong>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      ) : (
        <></>
      )}
      {showanimation ? <Loading /> : <></>}
      <AuthHeader />
      <div className="">
        <div className="row ">
          <div className="col-md-6 col-12 ">
            <div className="container mt-5 w-80per">
              <h1 className="sadbasiu83120ikas3-asdn3u">Sign Up</h1>
              <p className="adsfmi3o2049-4okjda-sad mt-n2">
                {" "}
                Let's create your account!
              </p>

              <div className="mt-5">
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                  }}
                  validationSchema={DisplayingErrorMessagesSchema}
                  onSubmit={async (values, { setSubmitting }) => {
                    await postCat(values);
                  }}
                >
                  {({ errors, touched, getFieldProps, handleSubmit }) => {
                    // cstErrors = errors;

                    return (
                      <Form>
                        <div className="row ">
                          <div className="col-md-6 p-0 m-0">
                            <label className="asdfn023u21-osld34-fas38">
                              First Name
                            </label>
                            <input
                              {...getFieldProps("first_name")}
                              className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder"
                            />
                            {touched.first_name && errors.first_name && (
                              <div
                                style={{
                                  color: "red",
                                  marginTop: 10,
                                  maxWidth: 320,
                                }}
                              >
                                {errors.first_name}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 ">
                            <label className="asdfn023u21-osld34-fas38">
                              Last Name
                            </label>
                            <input
                              {...getFieldProps("last_name")}
                              className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder"
                            />
                            {touched.last_name && errors.last_name && (
                              <div
                                style={{
                                  color: "red",
                                  marginTop: 10,
                                  maxWidth: 320,
                                }}
                              >
                                {errors.last_name}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12 p-0 m-0">
                            <label className="asdfn023u21-osld34-fas38">
                              Email
                            </label>
                            <input
                              {...getFieldProps("email")}
                              style={{ width: "97%" }}
                              className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder"
                            />
                            {touched.email && errors.email && (
                              <div
                                style={{
                                  color: "red",
                                  marginTop: 10,
                                  maxWidth: 320,
                                }}
                              >
                                {errors.email}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 p-0 m-0">
                            <label className="asdfn023u21-osld34-fas38">
                              Password
                            </label>

                            <input
                              {...getFieldProps("password")}
                              type={showpassword ? "text" : "password"}
                              className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder"
                            />

                            <FiEyeOff
                              onClick={() => setshowpassword(!showpassword)}
                              className="asdnas8fs9a0023-asfh3"
                              style={{ right: 9 }}
                            />
                            {touched.password && errors.password && (
                              <div
                                style={{
                                  color: "red",
                                  marginTop: 10,
                                  maxWidth: 320,
                                }}
                              >
                                {errors.password}
                              </div>
                            )}
                          </div>
                          <div className="col-md-6 ">
                            <label className="asdfn023u21-osld34-fas38">
                              Confirm Password
                            </label>
                            <input
                              {...getFieldProps("password_confirmation")}
                              type={showpassword1 ? "text" : "password"}
                              className="form-control asdmi394iejm423i8ds7ayh1-as font-19 newplaceholder"
                            />
                            <FiEyeOff
                              onClick={() => setshowpassword1(!showpassword1)}
                              className="asdnas8fs9a0023-asfh3"
                              style={{ right: 30 }}
                            />
                            {touched.password_confirmation &&
                              errors.password_confirmation && (
                                <div
                                  style={{
                                    color: "red",
                                    marginTop: 10,
                                    maxWidth: 320,
                                  }}
                                >
                                  {errors.password_confirmation}
                                </div>
                              )}
                          </div>
                        </div>
                        <button
                          onClick={handleSubmit}
                          type="button"
                          className="btn sgn-btn sgn-btn-wht w-100 mt-4"
                        >
                          Sign Up
                        </button>
                        <p className="dasf93uj497c6s03-214a9d34 mt-3">
                          By clicking Sign Up, you are indicating that you have
                          read and agree to our{" "}
                          <a href="/terms">Terms of Use</a> and{" "}
                          <a href="/privacy"> Privacy Policy</a>
                        </p>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-0 col-0 p-0 m-0 dsp-signing-img">
            <div className="dsp-flex-23">
              <img
                src="/images/images/TRuMOV.png"
                className="image-fluid"
                style={{ width: "70%", marginTop: "10%", borderRadius: 15 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
