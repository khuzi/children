import React from "react";
import AuthHeader from "../../components/authNavbar";
// import TRuMOV from '../../images/images/TRuMOV.png'
import { FiEyeOff } from "react-icons/fi";
// import {useLocation} from 'react-router-dom'
import * as Yup from "yup";
import { repository } from "../../utiles/repository";
// import { useHistory ,Link} from "react-router-dom";
import Link from "next/link";
import { values } from "lodash";
import { Toast } from "react-bootstrap";
import { Formik, Form } from "formik";
import { useDispatch } from "react-redux";
import { Login, saveToken } from "../../redux/actionMethodes/User/index";
import Loading from "../../components/LoadingAnimation";
import { useRouter } from "next/router";
import queryString from "query-string";
import { NextSeo } from "next-seo";
import Head from "next/head";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  password: Yup.string().required("Required"),
});
export default (props) => {
  //    const parms=useLocation();
  const parms = undefined;
  const history = useRouter();
  const dispatch = useDispatch();
  const parsed = queryString.parse(window.location.href);
  console.log(parsed[Object.keys(parsed)[0]], "sds");
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showpassword, setshowpassword] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);

  const postCat = async (datapost) => {
    setshowanimation(true);

    const { data, status } = await repository
      .login(datapost)
      .then((x) => x)
      .then((x) => x);
    console.log(data, status);
    if (status == 200) {
      dispatch(Login(data.me));
      dispatch(saveToken(data.access_token));
      history.replace("/account");
    } else {
      {
        setmessage("Something went wrong");
        setshowmessage(true);
        setshowanimation(false);
      }
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
              <h1 className="sadbasiu83120ikas3-asdn3u">Sign In</h1>
              <p className="adsfmi3o2049-4okjda-sad mt-n2">
                {" "}
                Welcome back to sign in to your account.
              </p>
              <Formik
                initialValues={{
                  email: parsed[Object.keys(parsed)[0]]
                    ? parsed[Object.keys(parsed)[0]]
                    : "",
                  password: "",
                }}
                validationSchema={DisplayingErrorMessagesSchema}
                onSubmit={async (values, { setSubmitting }) => {
                  await postCat(values);
                }}
              >
                {({
                  errors,
                  touched,
                  getFieldProps,
                  submitForm,
                  setErrors,
                  handleBlur,
                  values,
                  handleSubmit,
                }) => {
                  // cstErrors = errors;

                  return (
                    <Form style={{ alignItems: "center" }}>
                      <div className="mt-5">
                        <div className="row">
                          <div className="col-md-12 ">
                            <label className="asdfn023u21-osld34-fas38">
                              Password
                            </label>
                            <input
                              {...getFieldProps("password")}
                              type={showpassword ? "text" : "password"}
                              className="form-control asdmi394iejm423i8ds7ayh1-as"
                            />
                            <FiEyeOff
                              onClick={() => setshowpassword(!showpassword)}
                              className="asdnas8fs9a0023-asfh3"
                              style={{ right: 30 }}
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleSubmit}
                          className="btn sgn-btn sgn-btn-wht w-100 mt-4"
                        >
                          Sign In
                        </button>
                        <button
                          onClick={() => history.back()}
                          className="btn sgn-btn safas02i-2-43asfsf3 w-100 mt-2"
                        >
                          Back
                        </button>
                      </div>
                    </Form>
                  );
                }}
              </Formik>
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
