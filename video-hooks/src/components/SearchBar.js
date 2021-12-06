// Refactored from a class component to a functional component,
// this SearchBar component uses a piece of state called term which is really
// just the user input into the text box.

import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    // term is the input value that is changing
    const [term, setTerm] = useState("");

    const onSubmit = (event) => {
        // below prevents default action which is to refresh the page
        // with the value deleted from the input box.
        event.preventDefault();

        // the only prop passed to the SearchBar component is an onSubmit
        // event handler which deals with whatever the value of term is at
        // the time of submission.
        onFormSubmit(term);
    };

    // final returned JSX
    return (
        <div className="search-bar ui segment">
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Search Video</label>
                    <input
                        type="text"
                        placeholder="Type here..."
                        value={term}
                        // in the case of an input change an event is triggered,
                        // so every time the user types or backspaces
                        onChange={(event) => setTerm(event.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
