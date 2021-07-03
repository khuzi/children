import React from "react";
import { Formik, Form } from "formik";
import { Toast } from "react-bootstrap";
import * as Yup from "yup";
import Image from "next/image";
import { repository } from "../utiles/repository";
import { useDispatch } from "react-redux";
import { setLoading } from "../redux/actionMethodes/User/index";
import Loading from "../components/LoadingAnimation";
const DisplayingErrorMessagesSchema = Yup.object().shape({
  email: Yup.string().required("Required").email(),
});
export default () => {
  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const dispatch = useDispatch();
  const submitBtn = async () => {
    try {
      const { data, status } = await repository
        .subcribeEmail(email)
        .then((x) => {
          return x;
        })
        .then((x) => {
          return x;
        });
      if (status === 200) {
        if (data.message) {
          alert(data.message);
          setEmail("");
        } else {
          alert("Email address already exists in the system.");
        }
      }
    } catch (error) {
      console.log("Subscribe Error = ", error);
    }
  };
  const postCat = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository
      .contacts({
        contact: {
          email: datapost.email,
        },
      })
      .then((x) => x)
      .then((x) => x);

    // console.log(data, status)
    if (status == 201) {
      setshowanimation(true);
      setmessage(data.message);
      setshowmessage(true);
      datapost.email = "";
    } else {
      setmessage(data.message);
      setshowmessage(true);

      setshowanimation(false);
    }
  };
  return (
    <>
      {" "}
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
      <div className="back-header">
        {showanimation ? <Loading /> : <></>}
        <img src="../images/dots.png" className="dot-img" />

        <div className="container">
          <h1 className="font-28-custom font-700 text-center cst-para-stl-1 margin-top-custom">
            For more updates and news
          </h1>
          <p className="font-19-custom text-center">
            subscribe now to hear more from us.
          </p>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={DisplayingErrorMessagesSchema}
            onSubmit={async (values, { setSubmitting }) => {
              await postCat(values);
            }}
          >
            {({ errors, touched, getFieldProps, submitForm }) => {
              // cstErrors = errors;

              return (
                <div
                  className="sadasdawe2342 d-flex justify-content-center mob-margin-bottom-here"
                  style={{ alignItems: "center" }}
                >
                  <input
                    {...getFieldProps("email")}
                    className="input-set-32312sf-asdahs font-19 newplaceholder"
                    placeholder="Email address"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                    className="btn bg-dark text-white font-14"
                    onClick={submitBtn}
                  >
                    Subscribe
                  </button>
                </div>
              );
            }}
          </Formik>
        </div>
        <div className="fasdfh3-32423df">
          <img src="../images/dots.png" style={{ width: "15%" }} />
        </div>
      </div>
    </>
  );
};
