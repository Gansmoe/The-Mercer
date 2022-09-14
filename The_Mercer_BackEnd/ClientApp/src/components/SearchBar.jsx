import React from "react";
import { useState, useEffect } from 'react';
import Rooms from "./home components/rooms";

const SearchBar = (props) => {
    const [items, setItems] = useState(props.list);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setItems(props.list);
    })

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div className="search-bar-container">
            <input className="search-bar-input" type="text" placeholder="Filter..." onChange={handleChange} />
            <div className="search-bar-items">
                {items.filter((entry) => {
                    if (searchTerm === '') {
                        return entry;
                    } else if (entry.roomName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        return entry;
                    }
                })
                    .map((entry, key) => {
                        return (
                            <>
                                <Rooms key={entry.id} room={entry} />
                            </>
                        );
                    })}
            </div>
        </div>
    )
}

export default SearchBar;