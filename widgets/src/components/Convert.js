// This JS helper component receives the language to be outputted from Translate.js and
// the text that the user has typed in to the input textbox from Translate.js and then
// returns an h1 tag with the outputted text.
// It uses Googles Translation API

import React, { useState, useEffect } from "react";
import axios from "axios";

// https://translation.googleapis.com/language/translate/v2

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);

  // For control of the rate of API requests, 500ms timeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedText(text);
    }, 500);

    // if value of text changes before 500ms are up, cancel timer through cleanup function
    return () => {
      clearTimeout(timeoutId);
    };

  }, [text]);
  
  
  // Calls API every time language and text (debouncedText) are updated
  useEffect(() => {
    const doTranslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslation();
  }, [language, debouncedText]);


  // the returning JSX with the updated piece of state 'translated'
  return <h1 className="color-white">{translated}</h1>;
};

export default Convert;
