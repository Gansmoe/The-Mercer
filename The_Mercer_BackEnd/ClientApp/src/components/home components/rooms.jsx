import React from "react";
import { RestoreAlarm } from "../../Adapters/SmartHut";
import { postAlarmToDatabase } from "../../Adapters/Database";

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

    async handleClick(e) {
        //e.preventDefault();
        //ToDo, avgör om det är temp eller humid fel som ska nollställas.
        await RestoreAlarm(this.props.room.tempDevice);
        console.log(this.props.room);

        let userName = localStorage.getItem("Name");
        let userMail = localStorage.getItem("Mail");
        var body = JSON.stringify({
            "UserName": userName,
            "UserMail": userMail,
            "DeviceId": this.props.room.tempDevice
        });

        await postAlarmToDatabase(body);
    }


    render() {
    return (
        <div className="rooms">
            <h5>{this.props.room.roomName}</h5>
            <button onClick={this.handleClick.bind(this)} className="alarmBtn">Återställ</button>
            <i className="arrow down" onClick={this.eventHandler}></i>
            {this.state.showmore === true ? <div className="room-info"> <p>Temperatur: 23°C</p> <p>Luftfuktighet: 62%</p> <p>Uppdaterad: 2022-09-15</p> </div> : null}
        </div>
    );
    }
}

