import React, { useEffect } from "react";
import NavBar from "../../../components/headersingle";
import Footer from "../../../components/footer";
import Banner from "../../../components/banner";
import moment from "moment";
import { useSelector } from "react-redux";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { repository } from "../../../utiles/repository";
import { Toast } from "react-bootstrap";
import Loading from "../../../components/LoadingAnimation";
import SharedIcons from "../../../components/SharedIcons";
import getTime from "reading-time";
import { useRouter } from "next/router";
import Head from "next/head";
import { NextSeo } from "next-seo";

const DisplayingErrorMessagesSchema = Yup.object().shape({
  content: Yup.string().required("Required"),
});
const BlogCard = ({ img, subtitle, title, anchor }) => {
  return (
    <div className="bl-card-123hisa" style={{ borderRadius: "0px!important" }}>
      <img
        src={img}
        style={{
          backgroundColor: "F2F9FB",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
      />
      <div className="p-3">
        <p className="roboto-reg-12">{subtitle}</p>
        <h3 className="p-0 roboto-reg-18 " style={{ maxWidth: 224 }}>
          {title}
        </h3>
        <a className="roboto-reg-14 mt-5">{anchor}</a>
        <p className="roboto-reg-14 mt-2" style={{ fontWeight: "700" }}>
          Admin
        </p>
      </div>
    </div>
  );
};
export default () => {
  const navigation = useRouter();

  const { post } = navigation.query;
  const [blog, setblog] = React.useState(null);
  const user = useSelector((x) => x.User);
  const switch1 = useSelector((x) => x.switch1);
  const token = useSelector((x) => x.fcmToken);

  React.useEffect(() => {
    let partUrl = window.location.href;
    let lastPath = partUrl.split("/").pop();
    console.log(lastPath, "lastpath");
    if (lastPath) {
      setshowanimation(true);
      try {
        (async () => {
          const { data, status } = await repository
            .SingleBlog(lastPath)
            .then((x) => x)
            .then((x) => x);
          console.log(data, status);
          if (status == 200) {
            setblog(data.data);
            document.title = data.data.name;
          } else {
            navigation.replace("/");
          }

          setshowanimation(false);
        })();
      } catch (e) {
        navigation.replace("/");

        setshowanimation(false);
      }
    }
  }, []);

  const [message, setmessage] = React.useState("");
  const [showmessage, setshowmessage] = React.useState(false);
  const [showanimation, setshowanimation] = React.useState(false);
  const postCat = async (datapost) => {
    setshowanimation(true);
    const { data, status } = await repository
      .comment(datapost, blog && blog.id ? blog.id : "", token)
      .then((x) => x)
      .then((x) => x);

    console.log(data, status);
    if (status == 201) {
      setshowanimation(false);
      setmessage("Comment Added Successfully");
      setshowmessage(true);
      datapost.content = "";
    } else {
      setmessage(data.message);
      setshowmessage(true);

      setshowanimation(false);
    }
  };

  return (
    <div style={{ backgroundColor: switch1 == true ? "#212529" : "white" }}>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <Banner />

      <NavBar hasswitch={true} color="white" />
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
      <div className="mt-5 mb-5 container">
        <div className="img-render">
          <div className="post-data">
            <span className="post-title">
              {blog && blog.name ? blog.name : ""}
            </span>
            <div className="post-metadata">
              <span className="post-date">
                {moment(blog && blog.created_at ? blog.created_at : "")
                  .format("D MMMM YYYY")
                  .toString()}
              </span>
              <span className="post-time">
                {getTime(blog && blog.content ? blog.content : "").text}
              </span>
            </div>
          </div>
          <img
            className="post-image"
            src={blog && blog.image ? blog.image : ""}
          ></img>
        </div>
      </div>
      <section>
        <div className="container-fluid">
          <div className="container">
            <div
              className={switch1 == true ? "check-new-here get-all" : "get-all"}
              style={{ color: switch1 == true ? "white" : "" }}
              dangerouslySetInnerHTML={{
                __html: blog && blog.content ? blog.content : "",
              }}
            />

            <div
              className="article-portion4-asfhasi23 mt-5 mb-5 px-3 py-3 "
              style={{ backgroundColor: switch1 == true ? "#6b6b6b" : "" }}
            >
              <img
                src={
                  blog && blog.author && blog.author.image
                    ? blog.author.image
                    : ""
                }
                alt=""
                className="float-left asdnio2382jo mt-3 asd-sa0di23919aududh32-xc"
              />
              <div className="float-left nick-heading-asfhasi23">
                <h4 style={{ color: switch1 == true ? "white" : "" }}>
                  {blog && blog.author && blog.author.name
                    ? blog.author.name
                    : ""}
                </h4>
                <p
                  className="Nunito-family-asfhasi23"
                  style={{ color: switch1 == true ? "white" : "" }}
                >
                  {blog && blog.author && blog.author.description
                    ? blog.author.description
                    : ""}
                </p>
              </div>
              <div className="clearfix-asfhasi23"></div>
            </div>
            <div className="article-portion5-asfhasi23 mt-5 mb-3">
              <h2
                className="nunito-semi-24"
                style={{ color: switch1 == true ? "white" : "" }}
              >
                Comments (
                {blog && blog != null && blog.comments_count
                  ? blog.comments_count
                  : 0}
                )
              </h2>
              {blog &&
              blog != null &&
              blog.comments &&
              blog.comments.length > 0 ? (
                blog.comments.map((x) => (
                  <div className="article-portion_5-asfhasi23 mt-5 mb-5 pl-3 py-3">
                    <img
                      src="https://www.w3schools.com/howto/img_avatar.png"
                      alt=""
                      height="70px"
                      width="70px"
                      className="float-left asdnio2382jo"
                    />
                    <div className="float-left nick-heading-asfhasi23">
                      <p className="Nunito-family-asfhasi23">
                        {x.client.first_name} {x.client.last_name} on{" "}
                        {moment(x.created_at).format("DD MMM yyyy")}
                      </p>
                      <p className="Nunito-family-asfhasi23">{x.content}</p>
                      {/* <button type="submit" className="submit-asfhasi23 float-right bg-dark text-white">Reply</button> */}
                    </div>
                    <div className="clearfix-asfhasi23"></div>
                  </div>
                ))
              ) : (
                <></>
              )}

              <Formik
                initialValues={{
                  content: "",
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
                      <div className="form-group">
                        <textarea
                          {...getFieldProps("content")}
                          className="form-control text-secondary mb-5"
                          rows="6"
                          placeholder="Leave a comment..."
                        ></textarea>
                        {touched.content && errors.content && (
                          <div
                            style={{
                              color: "red",
                              marginTop: 10,
                              maxWidth: 320,
                            }}
                          >
                            {errors.content}
                          </div>
                        )}
                      </div>
                      {user && user != null ? (
                        <div onClick={handleSubmit} className="button">
                          <button
                            type="submit"
                            className="btn submit2 bg-dark text-white mb-2 "
                          >
                            Comment
                          </button>
                        </div>
                      ) : (
                        <a href="/signup">
                          <button className="btn sgn-btn sgn-btn-wht w-100 mt-4">
                            Sign Up
                          </button>{" "}
                        </a>
                      )}
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
        <SharedIcons
          shareLink={
            blog != null && blog && blog.id
              ? `https://inspirable.io/blog/post/` + blog.id
              : ""
          }
        />
      </section>
      <Footer />
    </div>
  );
};
