import React from 'react';
import Accordion from './components/Accordion';
import items from './components/items';


export default () => {
    return (
        <div className = "accordion">
            <h1>Harry Potter Trivia</h1>
            <Accordion items={items}/>
        </div>
    );
};