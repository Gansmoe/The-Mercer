import React from "react";
import { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [items, setItems] = useState(props.list);
    const [listComponent, setListComponent] = useState(props.componentType);
    const [searchTerm, setSearchTerm] = useState('');
    const Component = listComponent;

    useEffect(() => {
        setItems(props.list);
    })

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <input className="search-bar-input" type="text" placeholder="Filter..." onChange={handleChange} />

            {items.filter((entry) => {
                if (searchTerm === '') {
                    return entry;
                } else if (entry.roomName.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return entry;
                }
            })
                .map((entry, key) => {
                    return (
                        <div key={key} name={entry.roomName}>{entry.roomName}</div>
                    );
                })}
        </div>
    )
}

export default SearchBar;