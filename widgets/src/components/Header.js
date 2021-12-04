import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            {/* The Link here is used to override the default action of a normal anchor tag 
                more is explained within the Link component */}
            <Link href="/" className="item">
                {/* notice how there is no children prop being passed
                    that is because the children elements are what is between
                    the start and end tag */}
                Accordion
            </Link>
            <Link href="/dropdown" className="item">
                Dropdown
            </Link>
            <Link href="/search" className="item">
                Search
            </Link>
            <Link href="/translate" className="item">
                Translate
            </Link>
        </div>
    );
};

export default Header;
