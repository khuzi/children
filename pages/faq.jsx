import React from "react";
import NavBar from "../components/header";
import UpdateBox from "../components/updatenewcomp";
import Footer from "../components/footer";
import Loading from "../components/LoadingAnimation";
import CardData from "../utiles/cards";
import { NextSeo } from "next-seo";
import { useMediaQuery } from "react-responsive";
import Head from "next/head";
import { useSelector } from "react-redux";
import PrivateRoute from "../components/privateRoute";

const CarRender = ({ head, title, isActive }) => {
  return (
    <div className="card-sdafdsifhsda">
      <div
        className="card-body card-body-349as3"
        style={{ backgroundColor: isActive == true ? "#334d5e" : "" }}
      >
        <h4 className="asdfjo34-sadhfdi pb-3 mt-2">{head}</h4>
        <p className="card-text-21ihsad83 text-white">{title}</p>
      </div>
    </div>
  );
};

export default () => {
  const isMobile = useMediaQuery({
    query: "(max-device-width: 767px)",
  });
  React.useEffect(() => {}, []);

  let [data, setdat] = React.useState({
    isActive: 0,
    isDisble: true,

    //     data:[`Inspirable is a mobile app for children’s books and this idea is all about how we can improve the reading of children worldwide through carefully crafting content that inspires children. To read more, go to our About Us page.`,
    //   `Yes, Inspirable is compatible on both iOS and Android operating systems. Our app has been designed to work well on the latest smartphones and tablets, including the Samsung Galaxy, Samsung Note, Google Pixel 3, iPad, the latest iPhone and more.`,
    // `Our team is committed to offering comprehensive solutions to any troubleshooting issues that may arise when using our app. We have a member of our user support team on-call to assist should it be necessary. Please reach out to us directly by sending your issue to our via our contact us page, and a support representative will work with you to make sure the application works on your device.`,
    // `Our app will be available for children the ages of 2-12 years old. However, during the period of our market research we found that children who fall outside this category were keen to use our app. So, we have factored this in and therefore these books can be read by any age groups.`,
    // `All of our books are educational and fictional, featuring rich learning opportunities for your children. To give you an idea, the books range from stories that surround experiences that children have as they are growing up, as well as stories that look at aspirations for later life and so on.`,
    // `While we look forward to expanding the languages, for now our books are only available in English. This is something we are looking at for the future.`,
    // `Yes, totally free and we have made it so that there are no annoying ads too.`,
    // `Our books are for children between the ages of 2-12 years old. However, when we launch you will find that our books are for children between 2-8 years old, this is because we want to take more time developing this area, so we ask that you bear with us.\nWe have split the ages into three age groups;\n●2-4 years old\n●5-8 years old\n●9-12 years old`,
    // `We never like to see anyone leave Inspirable, however, we recognise that these thing do indeed happen and therefore we have intentionally decided we will never make it difficult for anyone to do so. To close your account, click here to get the process started.`]
  });

  const token = useSelector((x) => x.fcmToken);
  const handleChange = (id) => {
    if (data.isActive == id) {
      setdat({ ...data, isDisble: true, isActive: 0 });
    } else {
      setdat({ ...data, isDisble: false, isActive: id });
    }
  };
  return (
    <>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <NextSeo title="" description="" />
      </Head>
      <NavBar
        hastop={true}
        subtitle="Intrigued and have questions about Inspirable? Hopefully, we can answer them with the below! However, if your question is not answered below then head over to our Contact Us Page where you can submit your question to us."
        hassubtitle={true}
        title="Frequently Asked"
        titleSpan="Questions"
      />
      <div className="container-fluid">
        <div className="container mt-5">
          <div className="row ml-3">
            <div
              onClick={() => handleChange(1)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 1 ? true : false}
                head={CardData[0].title}
                title={CardData[0].excerpt}
              />
              {isMobile ? (
                data.isActive == 1 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => handleChange(2)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 2 ? true : false}
                head={CardData[1].title}
                title={CardData[1].excerpt}
              />
              {isMobile ? (
                data.isActive == 2 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => handleChange(3)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 3 ? true : false}
                head={CardData[2].title}
                title={CardData[2].excerpt}
              />
              {isMobile ? (
                data.isActive == 3 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
          </div>

          <div className="row ml-3">
            {!isMobile ? (
              data.isActive == 1 ||
              data.isActive == 2 ||
              (data.isActive == 3 && data.isDisble == false) ? (
                <p className="roboto-reg-16 pl-4 pr-4">
                  {CardData[data.isActive - 1].expanded}
                </p>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="row ml-3">
            <div
              onClick={() => handleChange(4)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 4 ? true : false}
                onClick={() => handleChange(4)}
                head={CardData[3].title}
                title={CardData[3].excerpt}
              />
              {isMobile ? (
                data.isActive == 4 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => handleChange(5)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 5 ? true : false}
                head={CardData[4].title}
                title={CardData[4].excerpt}
              />
              {isMobile ? (
                data.isActive == 5 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => handleChange(6)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 6 ? true : false}
                head={CardData[5].title}
                title={CardData[5].excerpt}
              />
              {isMobile ? (
                data.isActive == 6 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="row ml-3">
            {!isMobile ? (
              data.isActive == 4 ||
              data.isActive == 5 ||
              (data.isActive == 6 && data.isDisble == false) ? (
                <p className="roboto-reg-16 pl-4 pr-4">
                  {CardData[data.isActive - 1].expanded}
                </p>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
          <div className="row ml-3">
            <div
              onClick={() => handleChange(7)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 7 ? true : false}
                head={CardData[6].title}
                title={CardData[6].excerpt}
              />
              {isMobile ? (
                data.isActive == 7 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            <div
              onClick={() => handleChange(8)}
              className="col-lg-4 col-md-6 col-sm-12 mb-3"
            >
              <CarRender
                isActive={data.isActive == 8 ? true : false}
                head={CardData[7].title}
                title={CardData[7].excerpt}
              />
              {isMobile ? (
                data.isActive == 8 && data.isDisble == false ? (
                  <p className="roboto-reg-16 pl-4 pr-4">
                    {CardData[data.isActive - 1].expanded}
                  </p>
                ) : (
                  <></>
                )
              ) : (
                <></>
              )}
            </div>
            {token && token !== null ? (
              <div
                onClick={() => handleChange(9)}
                className="col-lg-4 col-md-6 col-sm-12 mb-3"
              >
                <CarRender
                  isActive={data.isActive == 9 ? true : false}
                  head={CardData[8].title}
                  title={CardData[8].excerpt}
                />
                {isMobile ? (
                  data.isActive == 9 && data.isDisble == false ? (
                    <p className="roboto-reg-16 pl-4 pr-4">
                      {CardData[data.isActive - 1].expanded}
                    </p>
                  ) : (
                    <></>
                  )
                ) : (
                  <></>
                )}
              </div>
            ) : null}
          </div>
          <div className="row ml-3">
            {!isMobile ? (
              data.isActive == 7 ||
              data.isActive == 8 ||
              (data.isActive == 9 && data.isDisble == false) ? (
                <p className="roboto-reg-16 pl-4 pr-4">
                  {CardData[data.isActive - 1].expanded}
                  {CardData[data.isActive - 1].linkExpanded ? (
                    <a href="/delete">
                      {CardData[data.isActive - 1].linkExpanded}
                    </a>
                  ) : (
                    <></>
                  )}
                  {CardData[data.isActive - 1].extraExpanded ? (
                    CardData[data.isActive - 1].extraExpanded
                  ) : (
                    <></>
                  )}
                </p>
              ) : (
                <></>
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <UpdateBox />
      <Footer />
    </>
  );
};
