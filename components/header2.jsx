import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap';
import { CgFacebook } from 'react-icons/cg'
import { ImInstagram, ImTwitter } from 'react-icons/im'
import { AiFillYoutube } from 'react-icons/ai'
import { FaPinterestP, FaInstagram } from 'react-icons/fa'
import {useSelector,useDispatch} from 'react-redux';
import {LogOut} from '../redux/actionMethodes/User'
import {Dropdown} from 'react-bootstrap'
import {useRouter} from 'next/router'
import Link from 'next/link'
export default ({ title, titleSpan, subtitle, hassubtitle, spanPara }) => {
    const user = useSelector(x => x.User)
    const dispatch=useDispatch();
    const history=useRouter();

    return <div className="back-header-2" style={{ backgroundColor: '#E3F6F5' }}>
        <div className="ml-5 mr-5 masd02-34asdsa3">
            <Navbar collapseOnSelect expand="lg" >
                <Navbar.Brand  href="/" className="cst-nav-link"><img src="/images/logo.png" className="logo-main" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-le">
                        <a as={Link} href="/" className="cst-nav-link roboto-reg-16 nav-link">Home</a>
                        <a  as={Link} href="/about" className="cst-nav-link roboto-reg-16 nav-link">About</a>
                        <a  as={Link} href="/features" className="cst-nav-link roboto-reg-16 nav-link">Features</a>
                        <a as={Link} href="/contact" className="cst-nav-link roboto-reg-16 nav-link">Contact</a>
                        <a as={Link} href="/blog" className="cst-nav-link roboto-reg-16 nav-link">Blog</a>
                        <a as={Link} href="/signin" className=" ">


                            {user && user != null ? <Dropdown>
                                <Dropdown.Toggle className="btn sgn-btn">
                                    Account
    </Dropdown.Toggle>

                                <Dropdown.Menu style={{    borderRadius: 16}}>
                                    <Dropdown.Item onClick={() => history.push('/account')}  >Account</Dropdown.Item>
                                    <Dropdown.Item onClick={() => dispatch(LogOut())}>Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown> : <a as={Link} href="/signin">
                                    <button className="btn sgn-btn sgn-btn-wht">
                                        Sign In
                            </button>
                                </a>}
                        </a>
                    </Nav>
                    <Nav>
                        <div>
                            <a style={{ color: '#334d5e' }} href="https://www.facebook.com/inspirableBooks" target="_blank"><CgFacebook className={`mr-3 `} /></a>
                            <a style={{ color: '#334d5e' }} href="https://www.instagram.com/inspirablebooks/" target="_blank"><FaInstagram className={`mr-3`} /></a>
                            <a style={{ color: '#334d5e' }} href="https://www.youtube.com/channel/UCW5p3U29I4rdV1aVCSf9zVQ?view_as=subscriber" target="_blank"><AiFillYoutube className={`mr-3`} /></a>

                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <h1 className="roboto-main-head-1 text-center margin-top-106">
                {title}
                <span> {titleSpan}</span>
            </h1>
            {
                hassubtitle == true ? <p className="roboto-reg-16 cst-para-stl-2 mt-5 head-sub-sds-2">
                    {subtitle} <span onClick={()=>window.open('mailto:?subject=I wanted you to see this site&body=Check out this site')}>{spanPara ? spanPara : <></>}</span>
                </p> : <div className="mt-5 pt-5"></div>
            }
            <div className="d-flex justify-content-center mt-4 mb-5">
                <a href="https://drive.google.com/drive/folders/14lEfoLcu8t33B3Ix_3Wq_y4S2r9FpxRj?usp=sharing" target="blank" className="btn mb-5 asdfji30-23ewudasdd23"  >
                    Download Press Kit
                </a>
            </div>
        </div>
    </div>
}