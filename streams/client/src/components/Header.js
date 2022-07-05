import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="header__logo-container">
                <img id="logo" src="/video-player-large.png" alt="logo" />
                <span className="header__link logo__title">Rivi</span>
            </Link>

            <div className="right menu">
                <Link to="/" className="header__link">
                    All Streams
                </Link>
            </div>
        </div>
    );
};

export default Header;
