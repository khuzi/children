import React from "react";
import NavBar from "../components/header";
import UpdateBox from "../components/updatenewcomp";
// import HelpDesk from "/images/icons/msg-13.png";
// import HelpDesk1 from "/images/icons/msk-14.png";
// import HelpDesk2 from "/images/icons/msk-15.png";
import { HiMail } from "react-icons/hi";
import Footer from "../components/footer";
import Loading from "../components/LoadingAnimation";

const HelpCard = ({ img, title, subtitle, hasButton, btntitle }) => {
  return (
    <div className="help-desk-card">
      <img src={img} />
      <p className="nunito-bold-16 text-center mt-2">{title}</p>
      <p className="font-14-open-sans text-center mt-n2">{subtitle}</p>
      {hasButton ? <button className="btn sgn-btn">{btntitle}</button> : <></>}
    </div>
  );
};
const HelpCard1 = ({ img, title }) => {
  return (
    <div
      className="d-flex justify-content-start pt-2 mt-3"
      style={{ backgroundColor: "#F2F9FB", borderRadius: 10 }}
    >
      <img src={img} className="cmn-img-stl" />
      <p className="nunito-bold-16 text-center mt-2">{title}</p>
    </div>
  );
};
export default () => {
  return (
    <div>
      <NavBar
        subtitle="Send us a message and we’ll get back to you within 24 hours."
        hassubtitle={true}
        title="Help"
        titleSpan="Desk"
      />
      <div className="mt-5 mb-5 container">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <HelpCard
                img="/images/icons/msg-13.png"
                hasButton={false}
                subtitle="Our team aim to respond to all queries within 24 hours."
                title="Welcome to the customer service centre."
              />
            </div>
            <div className="col-md-4">
              <HelpCard
                img={"/images/icons/msk-14.png"}
                title="FAQs"
                btntitle="Search FAQs"
                subtitle="Find answers to our most commonly asked questions."
                hasButton={true}
              />
            </div>
            <div className="col-md-4">
              <HelpCard
                img={"/images/icons/msk-15.png"}
                title="Ask a Question"
                btntitle="Ask a Question"
                subtitle="Send us a message and we’ll get back to you."
                hasButton={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 mb-5 mst-cmn-question-bx container">
        <h2 className="roboto-reg-18">Most commonly asked questions</h2>
        <div className="row">
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="How dose my trial work?"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="Do I have to receive a new kit every month?"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="Can I just buy razors when I need them??"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="How do I cancel my plan?"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="Can I change the contents of my kit?"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="Do I get a new handle with each kit?"
            />
          </div>
          <div className="col-md-6">
            <HelpCard1
              img={"/images/icons/msk-15.png"}
              title="Has my order been despatched?"
            />
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <p className="dasjkf83">
          <span>
            You don't have any conversations.{" "}
            <a>Click here to ask us a question.</a>
          </span>
        </p>
      </div>
      <div className="d-flex justify-content-center">
        <p className="dasjkf8311">
          We can deal with your enquiry more quickly if you’re logged in and use
          the contact for. However, if you are unable to use the form, please
          email.
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <p className="dasjkf83">
          <span>
            <a>
              <HiMail size={18} style={{ marginRight: 10 }} />
              help@inspirable.io
            </a>
          </span>
        </p>
      </div>
      <UpdateBox />
      <Footer />
    </div>
  );
};
