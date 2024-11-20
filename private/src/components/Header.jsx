import React from "react";
import Navbar from "./Navbar";
import logo from "../assets/logo-lg.webp";

const Header = () => (
    <>
        <header className="header ">
            <div className="header-container width-content">
                <div className="logo">
                    <a href="/">
                        <img src={logo} alt="Wannago Logo" />
                    </a>
                </div>
                <Navbar />
            </div>
        </header>
    </>
);

export default Header;
