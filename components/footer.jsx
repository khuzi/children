import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { CgFacebook } from "react-icons/cg";
import { ImInstagram, ImTwitter } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/link";
export default ({ color }) => {
  const history = useRouter();

  return (
    <>
      <div className="container-fluid footer bjasdfre">
        <div className="desktop-margin-left-right ml-5 mr-5">
          <div className="row">
            <div className="col-12 col-xs-12 col-sm-12 col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <img
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      history.push("/");
                    }}
                    src="/images/logo1.png"
                    className="logo-main-1 mt-5"
                  />
                  <div className="social-links ml-3">
                    <a
                      style={{ color: "white" }}
                      href="https://www.facebook.com/inspirableBooks"
                      target="_blank"
                    >
                      <CgFacebook className={`mr-3 `} />
                    </a>
                    <a
                      style={{ color: "white" }}
                      href="https://www.instagram.com/inspirablebooks/"
                      target="_blank"
                    >
                      <FaInstagram className={`mr-3`} />
                    </a>
                    <a
                      style={{ color: "white" }}
                      href="https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber"
                      target="_blank"
                    >
                      <AiFillYoutube className={`mr-3`} />
                    </a>
                  </div>
                </div>
                <div className="col-md-3">
                  <h5 className="text-white mt-5 nunito-bold-18 mb-2">
                    INSPIRABLE
                  </h5>
                  <ul className="nav flex-column bjasdfre">
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link text-white pl-0 mt-15px"
                        href="/about"
                      >
                        About us
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link text-white pl-0 mt-15px"
                        href="/blog"
                      >
                        Blog
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link text-white pl-0 mt-15px"
                        href="/press"
                      >
                        Press
                      </a>
                    </li>
                    <li className="nav-item mt-2 mb-2">
                      {/*}    <a className="nav-link text-white pl-0 mt-15px"   href="/auther" >Author/Writer?</a> */}
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5 className="text-white mt-5  nunito-bold-18 mb-2">
                    HELP AND SUPPORT
                  </h5>
                  <ul className="nav flex-column bjasdfre">
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link text-white pl-0 mt-15px"
                        href="/faq"
                      >
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a
                        className="nav-link text-white pl-0 mt-15px"
                        href="/contact"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5 className="text-white mt-5 nunito-bold-18 mb-2">LEGAL</h5>
                  <ul
                    className="nav flex-column dasfjdsfjo3i4rwdfs"
                    style={{ marginTop: -9 }}
                  >
                    <li className="nav-item mt-1">
                      <a className="nav-link text-white pl-0" href="/terms">
                        Terms of Use
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link text-white pl-0" href="/privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item mt-1">
                      <a className="nav-link text-white pl-0" href="/cookies">
                        Cookies Policy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* <div className="d-flex justify-content-center align-items-center">
                   <div className="row d-flex justify-content-center sdaf30dasn2">
                   
                   </div>
                </div> */}
            <div className="col-12 col-xs-12 col-sm-12 col-md-3 dsp-flex-23 mobile-margin-top mob-margin-bottom">
              <div className="row">
                <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 custom-center">
                  <a
                    href="#"
                    className="shadaskldhask-12812y8hasdh-sad shadaskldhask-12812y8hasdh-sd mt-3 mb-2"
                  >
                    <img className="w-100" src="/images/images/appstore.png" />
                  </a>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 custom-center">
                  <a
                    href="#"
                    className="shadaskldhask-12812y8hasdh-sad shadaskldhask-12812y8hasdh-sd mt-3 mb-2"
                  >
                    <img className="w-100" src="/images/images/playstore.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid asdfjlrhwio98sfdafsd">
        <p className="text-white pt-3 text-center">
          {" "}
          ©2021 | <b>INSPIRABLE</b>
        </p>
      </div>
    </>
  );
};
