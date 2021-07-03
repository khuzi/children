import React, { useEffect, useState } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";
import { CgFacebook } from "react-icons/cg";
import { ImInstagram, ImTwitter } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP, FaInstagram } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

import { useSelector, useDispatch } from "react-redux";
import { setswitch } from "../redux/actionMethodes/User";
import Switch from "react-switch";
import { BsMoon } from "react-icons/bs";
import { LogOut } from "../redux/actionMethodes/User";
export default ({
  color,
  hasWhite,
  active,
  isHome,
  hasswitch,
  isScrollable,
}) => {
  const user = useSelector((x) => x.User);
  const switch1 = useSelector((x) => x.switch1);
  const history = useRouter();
  if (hasswitch == true && color) {
    if (switch1 == true) color = "#c1c1bc";
  }
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isfixed, setrisfixed] = useState(false);
  const handleScroll = () => {
    if (isScrollable == true) {
      const position = window.pageYOffset;
      if (position > 48) {
        setrisfixed(true);
      } else {
        setrisfixed(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const dispatch = useDispatch();
  return (
    <div
      className="back-header"
      style={{ backgroundColor: color ? color : "" }}
    >
      <div className="ml-5 mr-5 masd02-34asdsa3">
        <Navbar
          className={`${isfixed ? "p-6p34" : ""}`}
          fixed={isfixed == true ? "top" : ""}
          style={{
            backgroundColor: isfixed == true ? "#334d5e" : "",
            color: "white",
          }}
          collapseOnSelect
          expand="lg"
        >
          <Navbar.Brand as={Link} href="/" className="cst-nav-link">
            <img
              className="logo-main"
              src={isfixed == true ? "/images/logo1.png" : "/images/logo.png"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-le">
              <a
                as={Link}
                href="/"
                className={`${
                  isHome == true
                    ? "cst-nav-link-12h323 nav-link font-17"
                    : "cst-nav-link nav-link font-17"
                } ${active == 1 ? "active" : ""} roboto-reg-16`}
              >
                Home
              </a>
              <a
                as={Link}
                href="/about"
                className={`${
                  isHome == true
                    ? "cst-nav-link-12h323 nav-link font-17"
                    : "cst-nav-link nav-link font-17"
                } ${hasWhite ? "color-white" : ""} ${
                  active == 2 ? "active-2" : ""
                }`}
                style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
              >
                About
              </a>
              <a
                as={Link}
                href="/features"
                className={`${
                  isHome == true
                    ? "cst-nav-link-12h323 nav-link font-17"
                    : "cst-nav-link nav-link font-17"
                } ${hasWhite ? "color-white" : ""} ${
                  active == 3 ? "active-2" : ""
                }`}
              >
                Features
              </a>

              <a
                as={Link}
                href="/contact"
                className={`${
                  isHome == true
                    ? "cst-nav-link-12h323 nav-link font-17"
                    : "cst-nav-link nav-link font-17"
                } ${hasWhite ? "color-white" : ""} ${
                  active == 4 ? "active" : ""
                }`}
                style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
              >
                Contact
              </a>
              <a
                as={Link}
                href="/blog"
                className={`${
                  isHome == true
                    ? "cst-nav-link-12h323 nav-link font-17"
                    : "cst-nav-link nav-link font-17"
                } ${hasWhite ? "color-white" : ""} ${
                  active == 5 ? "active-2" : ""
                }`}
                style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
              >
                Blog
              </a>

              {user && user != null ? (
                <Dropdown>
                  <Dropdown.Toggle
                    className="btn sgn-btn"
                    style={{
                      backgroundColor: hasWhite === true ? "#FFFFFF" : "",
                      color: hasWhite === true ? "#334D5E" : "",
                    }}
                  >
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ borderRadius: 16 }}>
                    <Dropdown.Item onClick={() => history.push("/account")}>
                      Account
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => dispatch(LogOut())}>
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                //  <Link href="/account">

                //        <button  className="btn sgn-btn"  style={{backgroundColor:hasWhite===true?'#FFFFFF':"",color:hasWhite===true?'#334D5E':""}}>
                //             Account
                //             </button>
                //        </Link>
                <a href="/signin">
                  <button
                    className={`sgn-btn btn ${hasWhite ? "" : "sgn-btn-wht"}`}
                    style={{
                      backgroundColor: hasWhite === true ? "#FFFFFF" : "",
                      color: hasWhite === true ? "#334D5E" : "",
                    }}
                  >
                    Sign In
                  </button>
                </a>
              )}
            </Nav>
            <Nav>
              <div>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.facebook.com/inspirableBooks"
                  target="_blank"
                >
                  <CgFacebook
                    className={`mr-3 `}
                    style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
                  />
                </a>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.instagram.com/inspirablebooks/"
                  target="_blank"
                >
                  <FaInstagram
                    className={`mr-3`}
                    style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
                  />
                </a>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber"
                  target="_blank"
                >
                  <AiFillYoutube
                    className={`mr-3`}
                    style={{ color: hasWhite === true ? "#FFFFFF" : "" }}
                  />
                </a>
                {hasswitch && hasswitch == true ? (
                  <Switch
                    checkedIcon={
                      <BsMoon
                        size={10}
                        style={{ marginLeft: 5, marginTop: -6 }}
                        color="black"
                      />
                    }
                    offColor="transparent"
                    width={35}
                    className="asd93ejsfr32sd"
                    onColor="white"
                    height={20}
                    onChange={() => {
                      dispatch(setswitch());
                    }}
                    checked={switch1}
                  />
                ) : (
                  <></>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </div>
  );
};
