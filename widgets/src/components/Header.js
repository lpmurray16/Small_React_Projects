import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            {/* The Link here is used to override the default action of a normal anchor tag 
                more is explained within the Link component */}
            <Link href="/" className="item color-white">
                {/* notice how there is no children prop being passed
                    that is because the children elements are what is between
                    the start and end tag */}
                Accordion
            </Link>
            <Link href="/dropdown" className="item color-white">
                Dropdown
            </Link>
            <Link href="/search" className="item color-white">
                Search
            </Link>
            <Link href="/translate" className="item color-white">
                Translate
            </Link>
        </div>
    );
};

export default Header;
