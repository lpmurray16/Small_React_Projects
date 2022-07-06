import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="header__logo-container">
                <img id="logo" src="/pixel_med.png" alt="logo" />
                <span className="header__link logo__title">Rivi</span>
            </Link>

            <div className="right menu">
                <Link to="/" className="header__link header__link--right">
                    All Streams
                </Link>
                <GoogleAuth />
            </div>
        </div>
    );
};

export default Header;
