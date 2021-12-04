// since this does not use any JSX there is no need to import React
// this Route component takes the path prop it has been given and
// takes the inner children between its opening and closing tag within App.js
// as arguments.

const Route = ({ path, children }) => {
    // if the pathname is the path then null otherwise return children
    return window.location.pathname === path ? children : null;
};

export default Route;
