import React from "react";
import NavBar from "../components/headersingle";
import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Loading from "../components/LoadingAnimation";
import { NextSeo } from "next-seo";
import Head from "next/head";

import { useRouter } from "next/router";
import { repository } from "../utiles/repository";
import { useSelector } from "react-redux";
import getTime from "reading-time";
import _ from "lodash";
import moment from "moment";
import { FiArrowRight } from "react-icons/fi";
const BlogCard = ({ img, subtitle, title, anchor, x, switch1 }) => {
  const navigation = useRouter();

  return (
    <div
      onClick={() =>
        navigation.push("/blog/post/" + x.id, { cursor: "pointer" })
      }
      className="bl-card-123hisa"
      style={{ borderRadius: "0px!important" }}
    >
      <img
        src={img}
        className="w-100"
        style={{
          backgroundColor: "F2F9FB",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          height: 200,
        }}
      />
      <div
        className="p-3 dsp-flex-23"
        style={{ backgroundColor: switch1 == true ? "#6b6b6b" : "" }}
      >
        <p
          className="roboto-reg-12"
          style={{ color: switch1 == true ? "white" : "" }}
        >
          {subtitle}
        </p>
        <h3
          className="p-0 roboto-reg-18 text-center asdoas-32-s0af3bud8cu9jw342"
          style={{ color: switch1 == true ? "white" : "" }}
        >
          {title}
        </h3>
        <p
          className="roboto-reg-14 mt-2"
          style={{ color: switch1 == true ? "white" : "" }}
        >
          {anchor}
        </p>
      </div>
    </div>
  );
};
const CardDSP1 = ({ image, head, title, post, x }) => {
  const navigation = useRouter();
  return (
    <div
      style={{ cursor: "pointer", width: "90%" }}
      onClick={() => navigation.push("/blog/post/" + x.id)}
      className="card-sdafdsifhsda"
    >
      <img
        className="card-img-top overlay border-rad-10-top h2-s223"
        src={image}
        alt="Card image cap"
        style={{ height: "170px" }}
      />
      <div className="asdfjhi3o423-sfhaosfd">
        <FiArrowRight />
      </div>
      <div className="card-body bg-white" style={{ height: "170px" }}>
        <p className="font-16 color-rgb-gray text-center">{title}</p>
        <p className="font-18 color-rgb-gray font-700 pl-2 pr-2 text-center asdoas-32-s0af3bud8cu9jw342">
          {head}
        </p>
        <p
          className="font-17 color-rgb-gray text-center"
          style={{ textDecoration: "none", marginBottom: "-1rem" }}
        >
          <u style={{ textDecoration: "none" }}>{post}</u>
        </p>
      </div>
    </div>
  );
};

export default () => {
  const [showanimation, setshowanimation] = React.useState(false);

  const [blogsmain, setBlogs] = React.useState([]);
  const [firstBlog, setFirstBlog] = React.useState(0);
  const switch1 = useSelector((x) => x.switch1);
  const navigation = useRouter();

  React.useEffect(() => {
    setshowanimation(true);
    try {
      (async () => {
        const { data, status } = await repository
          .Blogs()
          .then((x) => x)
          .then((x) => x);
        console.log(data, status);
        if (status == 200) {
          setBlogs(data.data);
          if (data.data.length > 0) {
            setFirstBlog(_.reverse([...data.data])[0].id);
          }
          setshowanimation(false);
        } else {
          setshowanimation(false);
        }
      })();
    } catch (e) {
      setshowanimation(false);
    }
  }, []);
  return (
    <div style={{ backgroundColor: switch1 == true ? "#212529" : "white" }}>
      {showanimation ? <Loading /> : <></>}
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <Banner />
      <NavBar hasswitch={true} active="5" color="white" />
      <div className="container-fluid   mt-3">
        <div className="container pt-5 pb-5">
          <div
            className="row bl-card-123hisa"
            onClick={() => navigation.push("/blog/post/" + firstBlog)}
            style={{
              backgroundColor: switch1 == true ? "#212529" : "",
              borderRadius: "0px!important",
            }}
          >
            <div className="col-lg-5 col-md-6 col-sm-12 mb-1 mt-5 mb-5">
              <img
                src={
                  blogsmain.length > 0 && blogsmain[blogsmain.length - 1].image
                    ? blogsmain[blogsmain.length - 1].image
                    : ""
                }
                alt="header section image"
                className="img-fluid img "
              />
            </div>

            <div className="col-lg-7 col-md-6 col-sm-12 mission mt-5 ">
              <p
                className="font-19 color-rgb-gray pl-3"
                style={{ color: switch1 == true ? "white" : "" }}
              >
                By{" "}
                {blogsmain.length > 0 &&
                blogsmain[blogsmain.length - 1].author &&
                blogsmain[blogsmain.length - 1].author.name
                  ? blogsmain[blogsmain.length - 1].author.name
                  : ""}{" "}
                -
                {moment(
                  blogsmain.length > 0 &&
                    blogsmain[blogsmain.length - 1].created_at
                    ? blogsmain[blogsmain.length - 1].created_at
                    : ""
                ).format("DD MMMM YY")}
              </p>

              <h1
                className="font-22 color-rgb-gray font-700 pl-3"
                style={{ color: switch1 == true ? "white" : "" }}
              >
                {blogsmain.length > 0 && blogsmain[blogsmain.length - 1].name
                  ? blogsmain[blogsmain.length - 1].name
                  : ""}
              </h1>

              <p
                className={
                  switch1 == true
                    ? "font-20 pl-3 asdjfoapsi390-423 new-check"
                    : "font-20 pl-3 asdjfoapsi390-423"
                }
                style={{ color: switch1 == true ? "white" : "" }}
                dangerouslySetInnerHTML={{
                  __html:
                    blogsmain.length > 0 &&
                    blogsmain[blogsmain.length - 1].content
                      ? blogsmain[blogsmain.length - 1].content
                      : "",
                }}
              ></p>

              <p
                className="pl-3 nunito-bold-18"
                style={{ color: switch1 == true ? "white" : "" }}
              >
                {
                  getTime(
                    blogsmain.length > 0 &&
                      blogsmain[blogsmain.length - 1].content
                      ? blogsmain[blogsmain.length - 1].content
                      : ""
                  ).text
                }
              </p>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5 container">
          <div className="dsp-flex-23">
            <h1
              className="roboto-main-head-cst-asdasd text-center"
              style={{ color: switch1 == true ? "white" : "" }}
            >
              Latest B<span>logs</span>
            </h1>
            <div
              className="asdjwei4930234-sadfds34 mb-5"
              style={{ backgroundColor: switch1 == true ? "white" : "" }}
            ></div>
          </div>

          <div className="row mt-5" style={{ justifyContent: "center" }}>
            {blogsmain.map((x, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-12 pl-4 mb-3">
                <CardDSP1
                  switch1={switch1}
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
            {/* {
                        blogsmain.map((x,i)=><div key={i} className="col-lg-4 col-md-6 col-sm-12 pl-4 mb-3">
                        <BlogCard switch1={switch1} x={x} img={x.image} title={x.name} subtitle={`by ${x.author && x.author.name?x.author.name:""} - ${moment(x.created_at).format("DD MMM yyyy")}`} anchor={getTime(x.content).text}/>
                    </div>)
                    } */}
            {/* <div className="col-md-4 mt-4">
                        <BlogCard img={Img7}  title="The true Importance of Childhood Reading" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img8} subtitle="by admin - 20 May 2018" title="How to Inspire Your Child to Be Whatever They Want To Be In Life" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img9} subtitle="by admin - 20 May 2018" title="5 types of sustainable materials to look for" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img10} subtitle="by admin - 20 May 2018" title="This summer is about giving our kids the gift of our time’ by the" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img11} subtitle="by admin - 20 May 2018" title="Creative ways to teach your child about Pride, love and inclusion" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img12} subtitle="by admin - 20 May 2018" title="Quia impensae Payonline Et liberate Amplificare" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img13} subtitle="by admin - 20 May 2018" title="This summer is about giving our kids the gift of our time’ by the" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img14} subtitle="by admin - 20 May 2018" title="Creative ways to teach your child about Pride, love and inclusion" anchor="10 Min Read" />
                    </div>
                    <div className="col-md-4 mt-4">
                        <BlogCard img={Img15} subtitle="by admin - 20 May 2018" title="Quia impensae Payonline Et liberate Amplificare" anchor="10 Min Read" />
                    </div>
                     */}
          </div>
          {/* <div className="d-flex justify-content-center mt-4">
                   <button className="btn asas8-230asdashdli21">1</button>
                   <button className="btn asas8-230asdashdli21 carousel__dot--selected">2</button>
                   <button className="btn asas8-230asdashdli21">3</button>
                   <button className="btn asas8-230asdashdli21">4</button>
                   <button className="btn asas8-230asdashdli21"><BsArrowRightShort/></button>
                </div> */}
        </div>
      </div>

      <UpdateBox />
      <Footer />
    </div>
  );
};
