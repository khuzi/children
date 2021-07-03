import React from "react";
import { FiArrowRight } from "react-icons/fi";
import NavBar from "../components/headersingle";
import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import Banner from "../components/banner";
import animationData from "../animations/Home_page.json";
import Lottie from "react-lottie";
import { NextSeo } from "next-seo";
import Head from "next/head";

const CardDSP = ({ classname, head, title }) => {
  return (
    <div className={`card1-324sa ${classname}`}>
      <h5 className="text-white text-center pt-3 roboto-reg-18">{head}</h5>
      <h6 className="text-white text-center mb-5">{title}</h6>
      <button className="btn text-dark mb-5 pl-3 font-weight-bold dsfheirowri-asdfasd">
        Explore Range
      </button>
    </div>
  );
};
const CardDSP1 = ({ image, head, title, post }) => {
  return (
    <div className="card-sdafdsifhsda">
      <img className="card-img-top" src={image} alt="Card image cap" />
      {/* <div className="asdfjhi3o423-sfhaosfd">
    <FiArrowRight/>
    </div> */}
      <div className="card-body">
        <p className="roboto-reg-14 text-center">{title}</p>
        <p className="roboto-reg-18 pl-2 pr-2  text-center ">{head}</p>
        <p
          className="roboto-reg-14 text-center"
          style={{ textDecoration: "underline" }}
        >
          <u>{post}</u>
        </p>
      </div>
    </div>
  );
};
export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <Banner />

      <div className="container-fluid header-section-asdfase8-sdasd">
        <NavBar active="2" color="transparent" isScrollable={false} />
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mission">
              <h1 className="roboto-main-head-cst-asdasd ">
                Our
                <span> Story:</span>
              </h1>
              <div className="asdjwei4930234-sadfds34"></div>
              <p className="mt-4 pb-2 mx-wdth512 font-18-custom color-rgb-gray">
                It all started back in 2017 when Natalie{" "}
                <span className="sadfop390adsf-2as">
                  (founder and the mastermind behind Inspirable)
                </span>{" "}
                came up with the idea to have a mobile app where parents and
                children can take an adventurous and fully immersive ride to the
                world of books.{" "}
              </p>
              <p className="mt-2 pb-2 mx-wdth512 font-18-custom color-rgb-gray">
                Natalie, who has worked professionally in Early Years for more
                than a decade, recognised a need for a place where informative
                and interesting books combine with modem technology. Natalie
                wants to inspire young children to be imaginative and explore
                different professions that seem remote or in other cases
                unattainable.{" "}
              </p>
              <p className="mt-2 pb-2 mx-wdth512 font-18-custom color-rgb-gray">
                Natalie alongside her tech-savvy husband started Inspirable to
                provide children with books that would not only nourish their
                minds but also help expose different and unique career pathways,
                such as an Astronaut, Computer Scientist or Forensic Scientist
                as well as others.{" "}
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
              <img
                src="/images/images/mission1.jpg"
                alt="header section image"
                className="img-fluid img asdf32sf9-asdnio2382jo"
                style={{ width: "71%" }}
              />
              <img
                src="/images/dots.png"
                alt="header section image "
                className="img-fluid img sadsa-sadasd-12412sadsdsd-sae"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: 120 }}>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
            <img
              src="/images/images/OurStory.jpeg"
              alt="header section image"
              className="img-fluid border-rad-10"
            />
          </div>

          <div className="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdas-sasdfjoew23-2342">
            <h1 className="roboto-main-head-cst-asdasd ">
              Our
              <span> Mission:</span>
            </h1>
            <div className="asdjwei4930234-sadfds34"></div>

            <p
              className="font-18 color-rgb-gray mx-wdth512 mt-3"
              style={{ maxWidth: 461 }}
            >
              We aim to reform the reading habits of children and increase their
              interest in books. As technology takes the newest forms, we wish
              to leverage technology to inculcate a true love for reading among
              our children. Inspirable's mission is to nurture the imagination
              of children and improve their social, emotional, and personal
              well-being. We also aim to bring parents and guardians on the same
              page with their children to actively engage in fun and learning
              activities in order to better develop interest and connection with
              literature. This will not only help in broadening a child's
              vocabulary but also help them think outside the box.
            </p>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid ">
          <div className="container pb-5">
            <div className="reading-heading">
              <h1 className="roboto-main-head-323hsd text-center">
                Our
                <span> Vision </span>
              </h1>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">
                <p
                  className="font-18 color-rgb-gray mx-wdth512"
                  style={{ maxWidth: 461 }}
                >
                  We envision to give direction to children towards the path of
                  bettering themselves and society by reforming their reading
                  interests. We wish to make reading fun and not a struggle in
                  terms of encouraging your children to read. We believe stories
                  don't have to be the same old narratives. That is why we
                  strive to bring the excitement back to reading so that your
                  child will be begging to dive into a story and feed their
                  wildest dreams.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                <img
                  src="/images/images/OurVision1.jpeg"
                  alt="header section image"
                  style={{ width: "90%" }}
                  className="img-fluid border-rad-10"
                />
              </div>
            </div>

            <div className="row lo90-u88gvtd67890gg">
              <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                <img
                  src="/images/images/OurVision2.jpeg"
                  alt="header section image"
                  className="img-fluid border-rad-10"
                  style={{ width: "90%" }}
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">
                <p
                  className="font-18 color-rgb-gray mx-wdth512"
                  style={{ maxWidth: 461 }}
                >
                  We want to breathe new life into children's education by
                  delivering well-conceptualised stories that are memorable,
                  educational and fun to read. For children who struggle to
                  remain attentive or for those who love finding new joys of
                  reading and learning, Inspirable is the perfect tool. After
                  thorough research and consideration, we have focused our
                  efforts on adding real value to stories that serve to aid in a
                  child's balanced growth and development. By having the main
                  character in each story personalised in some way, is the first
                  step in the transformation of the reading experience for
                  children. That said, we want the reader (your child) to become
                  part of the story so that they can better comprehend the
                  messaging and commit it to memory.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">
                <p
                  className="font-18 color-rgb-gray mx-wdth512"
                  style={{ maxWidth: 461 }}
                >
                  Inspirable is an innovative company, driven by our passion to
                  help children see themselves in the stories they read. We
                  believe in harnessing the power of technology to encourage
                  open-minded learning and effective reading. For children ages
                  2-12, we offer books designed for interactive reading and
                  enjoyment.
                </p>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                <img
                  src="/images/images/OurVision3.jpeg"
                  alt="header section image"
                  style={{ width: "90%" }}
                  className="img-fluid border-rad-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        style={{ position: "relative" }}
        className="about-reading-section"
      >
        <div style={{ position: "absolute", width: "100%", height: "100%" }}>
          <Lottie options={defaultOptions}></Lottie>
        </div>
        <div className="container-fluid Cards">
          <div className="container">
            <div className="row mt-5">
              <div className="reading-heading">
                <div className="dsp-flex-23 sfhu3wr-s34 pt-5">
                  <h1 className="roboto-main-head-323hsd text-center">
                    <span>Helping Parents </span>
                    Through the Milestones
                  </h1>
                  <div className="asdjwei4930234-sadfds34"></div>
                </div>
                <p
                  className="asdfji324-p  text-center mt-2"
                  style={{ zIndex: 100, fontSize: "22px", paddingTop: "2rem" }}
                >
                  We are focused on helping children.
                </p>
              </div>
            </div>

            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                <img
                  src="/images/images/asd34.png"
                  alt="header section image"
                  className="img-fluid "
                  style={{ width: "70%", borderRadius: 15 }}
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm-  mx-auto asdfjoew23-2342">
                <h1 className="roboto-main-head-cst-asdasd ">
                  <span> Early Years</span>
                </h1>
                <p className=" asdfji324-p ">2-4 years old </p>
                <div className="asdjwei4930234-sadfds34"></div>

                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  In those early years, it could be getting a toddler into a
                  sleep routine, helping them recognise their name, or learning
                  letters and sounds together.
                </p>
              </div>
            </div>
            <div className="row mt-asndsfa33 lo90-u88gvtd67890gg">
              <div className="col-lg-6 col-md-6 col-sm-12 mission asdfjoew23-2342">
                <h1 className="roboto-main-head-cst-asdasd ">
                  <span>First Chapter eBooks</span>
                </h1>
                <p className=" asdfji324-p ">5-8 years old </p>
                <div className="asdjwei4930234-sadfds34"></div>

                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  As children start school, the world around them opens up.
                  Stories about friendship, adventure, courage, and kindness
                  help children develop important social skills and grow their
                  imagination.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 mission asdfjoew23-2342">
                <img
                  style={{ width: "70%", borderRadius: 15 }}
                  src="/images/images/centercsfd.png"
                  alt="header section image jksdfijwe902-asidjs"
                  className="img-fluid "
                />
              </div>
            </div>

            <div className="row mt-asndsfa33">
              <div className="col-lg-6 col-md-6 col-sm-12 mission mt-5">
                <img
                  src="/images/images/dsfsa344.png"
                  alt="header section image"
                  className="img-fluid "
                  style={{ width: "70%", borderRadius: 15 }}
                />
              </div>

              <div className="col-lg-6 col-md-6 col-sm- mb-5 mt-5 mx-auto asdfjoew23-2342">
                <h1 className="roboto-main-head-cst-asdasd ">
                  <span>Fully Fledged Readers</span>
                </h1>
                <p className=" asdfji324-p ">9-12 years old </p>
                <div className="asdjwei4930234-sadfds34"></div>

                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  Children become more independent in their personality and
                  reading habits. Stories help them explore their enormous
                  potential, instill self-belief and build confidence in
                  reading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid  mt-3">
        <div className="container pt-5 pb-5">
          <div className="reading-heading desktop-hide">
            <h1 className="roboto-main-head-323hsd text-center">
              <span>Our Core Values</span>
            </h1>
            <p className="pt-4 mt-3 asdfji324-p pb-2 text-center">
              As we are dedicated to improving the future of your children - the
              change-makers of tomorrow - Inspirable has zero-compromise
              policies when it comes to core values. Our focus is to ensure:{" "}
            </p>
          </div>
          <div className="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342 mobile-show">
            <div className="reading-heading-123u9c">
              <h1 className="roboto-main-head">
                <span>Our Core Values</span>
              </h1>
              <div className="asdjwei4930234-sadfds34"></div>
              <p className="pt-4 mt-3 pb-2  color-rgb-gray">
                As we are dedicated to improving the future of your children -
                the change-makers of tomorrow - Inspirable has zero-compromise
                policies when it comes to core values. Our focus is to ensure:
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-12 mission mt-5">
              <img
                src="/images/images/asd34.png"
                alt="header section image"
                className="img-fluid "
                style={{ width: "90%", borderRadius: 15 }}
              />
            </div>

            <div className="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Transparency</span>
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  The original and illustrated books touch on topics that playa
                  part in children's lives and have an educational aspect to
                  them. Parents can monitor their child's vocabulary development
                  by checking the Parent Dashboard.
                </p>
              </div>
            </div>
          </div>

          <div className="row lo90-u88gvtd67890gg">
            <div className="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Bravery</span>
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  We are brave enough to take risks and formulate strategies
                  that will give our company a strong competitive edge within
                  the industry. We are always ready to take the big plunge when
                  it comes to the learning and development of young readers. We
                  encourage innovative ideas from our staff and suggestions that
                  come from our customers.
                </p>
              </div>
            </div>

            <div className="col-md-4 mission mt-5">
              <img
                src="/images/images/centercsfd.png"
                alt="header section image"
                style={{ width: "90%", borderRadius: 15 }}
                className="img-fluid "
              />
            </div>
          </div>

          <div className="row ">
            <div className="col-md-4  mission mt-5">
              <img
                src="/images/images/dsfsa344.png"
                alt="header section image"
                className="img-fluid "
                style={{ width: "90%", borderRadius: 15 }}
              />
            </div>

            <div className="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Passion</span>
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  All it requires to bring a change is an idea backed with a
                  true passion to turn it into reality. We make sure to ignite
                  this passion and build a strong community around books. We
                  believe new writers deserve appreciation and a proper platform
                  to showcase their talent. Inspirable is here to keep this
                  passion for writing and reading alive through our mobile app.
                  We also want to see parents take as much of an active role in
                  the development of their children whilst using modern
                  technology.
                </p>
              </div>
            </div>
          </div>

          <div className="row lo90-u88gvtd67890gg">
            <div className="col-md-8 mb-5 mt-5 mx-auto asdfjoew23-2342">
              <div className="reading-heading-123u9c">
                <h1 className="roboto-main-head">
                  <span>Educational</span>
                </h1>
                <div className="asdjwei4930234-sadfds34"></div>
                <p className="pt-4 mt-3 pb-2 font-18 color-rgb-gray">
                  We share content that increases the knowledge of our young
                  readers. Our wide collection of books covers different
                  subjects and encourages learning with purpose. We wish to
                  prepare children for the future with real-world information.{" "}
                </p>
              </div>
            </div>

            <div className="col-md-4 mission mt-5">
              <img
                src="/images/images/centercsfd.png"
                alt="header section image"
                style={{ width: "90%", borderRadius: 15 }}
                className="img-fluid "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <UpdateBox />
      </div>
      <Footer />
    </div>
  );
};
