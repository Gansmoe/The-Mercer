import React from "react";
import { useState, useEffect } from 'react';

const SearchBar = () => {
    const [items, setItems] = useState([]);
    //const [listComponent, setListComponent] = useState(React.Component);
    const [searchTerm, setSearchTerm] = useState('');

    // Temporary Test Data
    useEffect(() => {
        const mockup = [
            {
                name: "Conference Room",
                temp: 23,
                humid: 32
            },
            {
                name: "Main Lobby",
                temp: 21,
                humid: 214
            },
            {
                name: "Guest Hall",
                temp: 30,
                humid: 192
            }
        ];
        setItems(mockup);
    }, []);

    return (
        <div>
            <input className="search-bar-input" type="text" placeholder="Filter..." onChange={event => { setSearchTerm(event.target.value) }} />
            {items.filter((val) => {
                if (searchTerm === '') {
                    return val;
                } else if (val.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return val;
                }
            })
                .map((room, key) => {
                    return (
                        <div>{room.name}, {room.temp}, {room.humid}</div>
                    );
                })}
        </div>
    )
}

export default SearchBar;