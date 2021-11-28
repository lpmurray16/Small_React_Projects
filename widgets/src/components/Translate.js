import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

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
          <Convert language={language} text={text} />
      </div>
    </div>
  );
};

export default Translate;
