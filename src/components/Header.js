import React from "react";
import logo from "../assets/images/logo.png"

import { Link } from "react-router-dom";



const Header = () => {
    return(
        <header id="site-header" className="fixed-top">
            <div className="container">
                <nav className="navbar navbar-expand-lg stroke">
                    <h1>
                        <Link  to="/" className="navbar-brand mr-lg-5 ">
                            <img  src={logo} alt="" title="Your logo" />
                            <div className="mt-2">HCAP</div>
                        </Link>
                    </h1>
                    <button className="navbar-toggler  collapsed bg-gradient" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fa icon-expand fa-bars"></span>
                        <span className="navbar-toggler-icon fa icon-close fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav w-100">
                        <li className="nav-item active">
                            <Link  to="/" className="nav-link ">Home<span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item @@about__active">
                            <Link  to="/about" className="nav-link ">About Us</Link>
                        </li>
                        <li className="nav-item @@causes__active">
                        <Link  to="/causes" className="nav-link ">Causes</Link>
                        </li>
                        <li className="nav-item @@gallery__active">
                        <Link  to="/gallery" className="nav-link ">Gallery</Link>
                        </li>
                        <li className="ml-lg-auto mr-lg-0 m-auto">
                            {/* search-right */}
                        </li>
                        <li className="align-self">
                            <a href="contact.html" className="btn btn-style btn-primary ml-lg-3 mr-lg-2"><span className="fa fa-phone mr-1"></span> Contact Us</a>
                        </li>
                        </ul>
                    </div>
                    {/* toggle switch for light and dark theme */}
                    <div className="mobile-position">
                        <nav className="navigation">
                        <div className="theme-switch-wrapper">
                            <label className="theme-switch" htmlFor ="checkbox">
                                <input type="checkbox" id="checkbox"/>
                                <div className="mode-container">
                                    <i className="gg-sun"></i>
                                    <i className="gg-moon"></i>
                                </div>
                            </label>
                        </div>
                        </nav>
                    </div>
                    {/* toggle switch for light and dark theme  */}
                </nav>
            </div>
        </header>
    )
}

export default Header