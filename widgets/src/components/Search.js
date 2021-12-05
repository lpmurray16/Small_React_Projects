// This Search.js component simply uses an input textbox and calls the Wikipedia API with the given search term
// it then renders a list of results destructured into their respective parts such as title and snippet. It also
// allows the user to visit the wikipedia page based on the returned pageid value.

import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    

    // runs at first render and then every time the term state is updated, calls Wikipedia API
    useEffect(() => {
        const searchWiki = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });

            setResults(data.query.search);
        };

        // Below is not needed for this new implementation
        // if(term && !results.length) {
        //     searchWiki();
        // } else {
        //     const timeoutId = setTimeout(() => {
        //         if(term) {
        //             searchWiki();
        //         }
        //     }, 500);
            
        //     return( () => {
        //         clearTimeout(timeoutId);
        //     });
        // }


        // controls the rate of API request based on a timeout of 500ms after user stops typing
        const timeoutId = setTimeout(() => {
            if(term) {
                searchWiki();
            }
        }, 500);
        
        // user typed within 500ms, so clear timer and run again aka: cleanup function
        return( () => {
            clearTimeout(timeoutId);
        });

    }, [term]);

    // renderedResults maps over the collected results array and uses the values pageid, title, and snippet from the returned data object array
    const renderedResults = results.map((result) => {
        return (
            <div key = { result.pageid } className = "item extra-room">
                <div className = "right floated content">
                    <a href={`https://en.wikipedia.org?curid=${ result.pageid }`} target="_blank" rel="noopener noreferrer" className = "ui primary button">Go</a>
                </div>
                <div className = "content">
                    <a href={`https://en.wikipedia.org?curid=${ result.pageid }`} 
                    target="_blank"
                    rel="noopener noreferrer">
                        <div className = "header color-blue">{ result.title }</div>
                    </a>
                    {/* since result.snippet returns html format, there is an attribute one could use (if the source is trusted) that displays the html within the div */}
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span><span>. . . </span>
                    <p>----- Click GO to read more -----</p>
                </div>
            </div>
        );
    });

    // the final returned JSX, 
    return (
        <div className="wider cover_container">
            <div className = "ui form">
                <div className = "field">
                    <label className = "color-white">Enter Search Term</label>
                    {/* e.target.value simply returns the value being dynamically typed into the input field */}
                    <input className = "input" placeholder="Start Typing..." value= {term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>

            {/* using the result from mapping over the results array, displays the returned content from search */}
            <div className = "ui celled list bg-white">{ renderedResults }</div>

        
        </div>
    );
};

export default Search;
