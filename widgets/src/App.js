import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import items from './components/items';
import Search from './components/Search';


const options = [
    {
        label: 'The color red',
        value: 'red'
    },
    {
        label: 'The color green',
        value: 'green'
    },
    {
        label: 'The color blue',
        value: 'blue'
    }
];

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div className = "accordion wider flex-center col">
            {/* <h1 className = "title_top"><img src="harrypotter_title.png" alt="something"/>Trivia</h1> */}
            {/* <Accordion items={items}/> */}
            {/* <Search/> */}
            <button className = "ui button" onClick={() => setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            {showDropdown ? (
                <div>
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected} 
                    options= { options }
                />
                <p className="dropdown-text" style={{color: selected.value}}>The text is {selected.value}</p>
                </div>
                ) : null
            }
            
        </div>
    );
};