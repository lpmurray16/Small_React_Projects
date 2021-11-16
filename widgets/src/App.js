import React from 'react';
import Accordion from './components/Accordion';
import items from './components/items';
import Search from './components/Search';


export default () => {
    return (
        <div className = "accordion wider">
            {/* <h1 className = "title_top"><img src="harrypotter_title.png" alt="something"/>Trivia</h1> */}
            {/* <Accordion items={items}/> */}
            <Search/>
        </div>
    );
};