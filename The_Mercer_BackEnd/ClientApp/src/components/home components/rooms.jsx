import React from "react";


const Rooms = ({ room }) => {


    return (
        <div className="rooms">
            <h5>{room.roomName}</h5>
            <button>Återställ</button>
            <i className="arrow down"></i>
        </div>
    );
}

export default Rooms;
