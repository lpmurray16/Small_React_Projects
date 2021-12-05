// The Accordion.js component is very straight forward. It only takes one prop and that is an array
// of objects with values of title and content. It is reusable just like the Dropdown.js component.

import React, { useState } from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index, activeOne) => {
        if(index === activeOne) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
        
    };

    // renderedItems is an array of
    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active':'';
        return (
        // Using React.Fragment in order to wrap these two divs together without adding an extra node to the DOM
        <React.Fragment key={item.title}> 
            {/* sets the class to active or empty string based on whether or not the index value is the activeIndex value from the state object */}
            {/* onTitleClick which is created above just sets this item from the array as the active item and sets its index as the activeIndex */}
            <div className={`title ${active}`} onClick={() => onTitleClick(index, activeIndex)}>
                <i className="dropdown icon"></i>
                    {item.title}
            </div>
            {/* once again, using the logic above the return statement inside of renderedItems sets the class name as active or not */}
            <div className={`content ${active}`}>
                <p>{item.content}</p>
            </div>
        </React.Fragment>

        );
    });


    // final returned JSX div for Accordion component, uses renderedItems from above.
    return (
        <div className="cover_container">
            <h1 className = "title_top"><img src="harrypotter_title.png" alt="Harry Potter Movie Title Graphic"/>Trivia</h1>
            <div className="ui styled accordion">
                {renderedItems}
            </div>
        </div>
        
    );
};

export default Accordion;