import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);
    
    console.log(results[0]);
    
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

        // THIS ISN'T NEEDED FOR MY IMPLEMENTATION
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

        const timeoutId = setTimeout(() => {
            if(term) {
                searchWiki();
            }
        }, 500);
        
        return( () => {
            clearTimeout(timeoutId);
        });

    }, [term]);


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
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span><span>. . . </span>
                    <p>----- Click GO to read more -----</p>
                </div>
            </div>
        );
    });
    return (
        <div className="wider">
            <div className = "ui form">
                <div className = "field">
                    <label className = "color-white">Enter Search Term</label>
                    <input className = "input" placeholder="Start Typing..." value= {term} onChange={(e) => setTerm(e.target.value)}/>
                </div>
            </div>


            <div className = "ui celled list bg-white">{ renderedResults }</div>

        
        </div>
    );
};

export default Search;
