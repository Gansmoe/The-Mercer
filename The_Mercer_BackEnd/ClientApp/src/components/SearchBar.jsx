import React from "react";
import { useState, useEffect } from 'react';

const SearchBar = ({ list, component }) => {
    const [items, setItems] = useState(list);
    const [listComponent, setListComponent] = useState(component);
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

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input className="search-bar-input" type="text" placeholder="Filter..." onChange={handleChange} />
            {items.filter((entry) => {
                if (searchTerm === '') {
                    return entry;
                } else if (entry.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return entry;
                }
            })
                .map((entry, key) => {
                    return (
                        <div key={key}>{entry.name}, {entry.temp}, {entry.humid}</div>
                    );
                })}
        </div>
    )
}

export default SearchBar;