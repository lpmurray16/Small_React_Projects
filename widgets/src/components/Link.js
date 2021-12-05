// A custom Link component to be used instead of your basic anchor tag
// It accepts three props that are somewhat similar to an anchor tag and that is
// a class name and a href attribute, though unlike an anchor tag it also has a
// children prop that represents its inner elements as objects

import React from "react";

const Link = ({ className, href, children }) => {
    const onClick = (event) => {
        //  will open in new tab and navigate to the href
        if (event.metaKey || event.ctrlKey) {
            return;
        }

        // prevents the on click event from triggering its default action,
        // which in this case is a request and reload of the browser
        // we are trying to avoid a request
        event.preventDefault();

        //built in function, swaps out relative pathname to /{href}
        window.history.pushState({}, "", href);

        // send out a navigation event, that the URL has changed
        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
        <a onClick={onClick} className={className} href={href}>
            {children}
        </a>
    );
};

export default Link;
