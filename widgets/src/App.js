import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Dropdown from "./components/Dropdown";
import items from "./components/items";
import Search from "./components/Search";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

const options = [
    {
        label: "The color red",
        value: "red",
    },
    {
        label: "The color green",
        value: "green",
    },
    {
        label: "The color blue",
        value: "blue",
    },
];

// {{{{{{{ UNUSED, very basic way of implementing routing }}}}}}}
// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };
// const showSearch = () => {
//   if (window.location.pathname === "/search") {
//     return <Search />;
//   }
// };
// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };
// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };

// {{{{ Similar to the above functions, but still not very React-oriented }}}}
// const showComponent = (route, component) => {
//     return window.location.pathname === route
//     ? component
//     : null;
// };

export default () => {
    // both of these state variables are used in Dropdown
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    // final JSX returned from App.js which includes and uses all components within this application.
    // displayed through Routing without React Router
    return (
        <div className="wider flex-center col">
            <Header />
            <Route path="/">
                <Accordion items={items} />
            </Route>
            <Route path="/dropdown">
                <div className="cover_container">
                    <button
                        className="ui button full"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        Toggle Dropdown
                    </button>
                    {showDropdown ? (
                        <div>
                            <Dropdown
                                selected={selected}
                                onSelectedChange={setSelected}
                                options={options}
                            />
                            <p
                                className="dropdown-text"
                                style={{ color: selected.value }}
                            >
                                The text is {selected.value}
                            </p>
                        </div>
                    ) : null}
                </div>
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
};
