import React from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { CgFacebook } from "react-icons/cg";
import { ImInstagram, ImTwitter } from "react-icons/im";
import { AiFillYoutube } from "react-icons/ai";
import { FaPinterestP, FaInstagram } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { LogOut } from "../redux/actionMethodes/User";
import { Dropdown } from "react-bootstrap";
const TopBar = ({ hastop, title, titleSpan, subtitle, hassubtitle }) => {
  if (hastop) {
    return (
      <>
        <div className="dsp-flex-23">
          <h1 className="roboto-main-head text-center cst-para-stl ">
            {title}
            <span> {titleSpan}</span>
          </h1>
          <div className="asdjwei4930234-sadfds34"></div>
        </div>
        {hassubtitle == true ? (
          <p
            className="roboto-reg-16 text-center mt-5"
            style={{ maxWidth: 747, margin: "auto" }}
          >
            {subtitle}
          </p>
        ) : (
          <div className="mt-5 pt-5"></div>
        )}
      </>
    );
  } else {
    return (
      <>
        {hassubtitle == true ? (
          <p className="roboto-reg-16 cst-para-stl">{subtitle}</p>
        ) : (
          <div className="mt-5 pt-5"></div>
        )}
        <h1 className="roboto-main-head text-center">
          {title}
          <span> {titleSpan}</span>
        </h1>
      </>
    );
  }
};
export default ({
  title,
  titleSpan,
  subtitle,
  hassubtitle,
  hastop,
  active,
}) => {
  const user = useSelector((x) => x.User);
  const dispatch = useDispatch();
  const history = useRouter();

  return (
    <div className="back-header mb-5">
      <div
        className="ml-5 mr-5 masd02-34asdsa3"
        style={{ paddingBottom: "5%" }}
      >
        <Navbar collapseOnSelect expand="lg">
          <Navbar.Brand as={Link} href="/" className="cst-nav-link nav-link">
            <img src="/images/logo.png" className="logo-main" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-le">
              <a as={Link} href="/" className="cst-nav-link font-17 nav-link">
                Home
              </a>
              <a
                as={Link}
                href="/about"
                className="cst-nav-link font-17 nav-link"
              >
                About
              </a>
              <a
                as={Link}
                href="/features"
                className="cst-nav-link font-17 nav-link"
              >
                Features
              </a>
              <a
                as={Link}
                href="/contact"
                className={`cst-nav-link font-17 nav-link ${
                  active == 4 ? "active-2" : ""
                }`}
              >
                Contact
              </a>
              <a
                as={Link}
                href="/blog"
                className="cst-nav-link font-17 nav-link"
              >
                Blog
              </a>

              {user && user != null ? (
                <Dropdown>
                  <Dropdown.Toggle className="btn sgn-btn sgn-btn-wht">
                    Account
                  </Dropdown.Toggle>

                  <Dropdown.Menu style={{ borderRadius: 16 }}>
                    <Dropdown.Item onClick={() => history.push("/account")}>
                      Account
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => {
                        dispatch(LogOut());
                        history.push("/");
                      }}
                    >
                      Log Out
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                <Link href="/signin">
                  <button className="btn sgn-btn sgn-btn-wht">Sign In</button>
                </Link>
              )}
            </Nav>
            <Nav>
              <div>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.facebook.com/inspirableBooks"
                  target="_blank"
                >
                  <CgFacebook className={`mr-3 `} />
                </a>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.instagram.com/inspirablebooks/"
                  target="_blank"
                >
                  <FaInstagram className={`mr-3`} />
                </a>
                <a
                  style={{ color: "#334d5e" }}
                  href="https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber"
                  target="_blank"
                >
                  <AiFillYoutube className={`mr-3`} />
                </a>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <TopBar
          hastop={hastop}
          title={title}
          titleSpan={titleSpan}
          subtitle={subtitle}
          hassubtitle={hassubtitle}
        />
      </div>
    </div>
  );
};
