import React from "react";

const Rooms = ({ device }) => {
    return (
        <div className="rooms">
            <h5>{device.name}</h5>
            <button>Återställ</button>
            <i className="arrow down"></i>
        </div>
    );
}

export default Rooms;