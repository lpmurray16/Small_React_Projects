import React from 'react';
import Accordion from './components/Accordion';
import items from './components/items';


export default () => {
    return (
        <div className = "accordion">
            <h1 className = "title_top"><img src="harrypotter_title.png" alt="something"/>Trivia</h1>
            <Accordion items={items}/>
        </div>
    );
};