// This Dropdown.js component is a typical dropdown react component,
// it takes a few props such as label, options, selected, and onSelectChange
// It can be reused throughout the project folder and is in fact used in the
// Translate.js component

import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
  const [open, setOpen] = useState(false);

  // to avoid event bubbling when displaying and removing the Dropdown component from view
  // a ref was created on the top most parent div in the returned component JSX, see below.
  const ref = useRef();


  // This useEffect has a primary purpose of simply detecting whether the Dropdown
  // component is displayed or not within the DOM. Or the Dropdown menu itself is open or closed.
  useEffect(() => {
    // If the user clicks the body (outside of the dropdown itself), then
    // close the dropdown menu
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setOpen(false);
    };

    // adds a click event listener on the body tag of the DOM, see above
    document.body.addEventListener("click", onBodyClick, { capture: true });
    
    // cleanup function, seen as 
    return () => {
      document.body.removeEventListener("click", onBodyClick, { capture: true });
    };
  }, []);


  // renderedOptions is an array of objects returned from mapping over the array of options that
  // was supplied to the Dropdown component itself.
  const renderedOptions = options.map((option) => {

    // since the selected value is coming from the App.js file itself as a prop, if the option is the selected
    // value already then simply skip by returning null
    if (option.value === selected.value) {
      return null;
    }


    // otherwise, return the list of all the options (including the current selected option even though it is,
    // currently being used and displayed)
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });


  // the final returned JSX for the Dropdown.js component,
  // the label is pulled from the handed down props along with the label from the currently
  // selected option from the options array.
  return (
    <div ref={ref} className="ui form top-bottom">
      <div className="field col">
        <label className="label color-white">{label}</label>
        <div
        // onClick calls the setter function from the state 
        // property found above, negates whatever state it is in.
          onClick={() => {
            setOpen(!open);
          }}
          // Dynamically changes the inline CSS based on whether the open state is true or false
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
