// this Route component takes the path prop it has been given and
// takes the inner children between its opening and closing tag within App.js
// as arguments.
import { useEffect, useState } from "react";

const Route = ({ path, children }) => {
    // this is constantly CURRENT at all time, BUT it causes the component to
    // rerender on change, unlike just simply using window.location.pathname
    // by itself. So at first render it is set a value.
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // useEffect is needed in order to handle the newly created event made
    // inside of the Link component and to set the ever current value of
    // window.location.pathname which causes a rerender.
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener("popstate", onLocationChange);

        // cleanup function that removed the event listener
        return () => {
            window.removeEventListener("popstate", onLocationChange);
        };
    }, []);

    // if the currentPath is the path then null (do not display anything new)
    // otherwise display that child object/component
    return currentPath === path ? children : null;
};

export default Route;
