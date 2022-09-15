import React from "react";


export default class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            showmore: false
        };
    }

    eventHandler = (event) => {
        if (this.state.showmore === false) {
            this.setState({showmore: true});
        } else {
            this.setState({showmore: false});
        }
        
        event.target.classList.toggle("up");
    }


    render() {
    return (
        <div className="rooms">
            <h5>{this.props.room.roomName}</h5>
            <button className="alarmBtn">Återställ</button>
            <i className="arrow down" onClick={this.eventHandler}></i>
            {this.state.showmore === true ? <div className="room-info"> <p>Temperatur: 23°C</p> <p>Luftfuktighet: 62%</p> <p>Uppdaterad: 2022-09-15</p> </div> : null}
        </div>
    );
    }
}

