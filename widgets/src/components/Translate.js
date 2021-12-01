// Reusing the Dropdown.js component, this component allows a user to select an output
// language from the small array of "options" and then type English text into a textbox
// This text and language are then sent as props to the Convert.js component where they
// are processed and used through the Google Translation API

import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// API key AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM


// Array of objects, selection of languages to output inputted text
const options = [
  {
    label: "Spanish",
    value: "es",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "French",
    value: "fr",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="color-white">Enter Text:</label>
          <input
            type="text"
            value={text}
            // e.target.value simply grabs the inputted text FROM the input tag as it is dynamically typed
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      <Dropdown
        label="Select a Language: "
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <div className="container">
          <h3 className="ui header color-white">Output:</h3>
          {/* The Convert component is now called with language and text as props */}
          <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
