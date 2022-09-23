import React from "react";
import { RestoreAlarm } from "../../Adapters/SmartHut";
import { postAlarmToDatabase } from "../../Adapters/Database";
import { Link } from "react-router-dom";

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
            this.setState({ showmore: true });
        } else {
            this.setState({ showmore: false });
        }

        event.target.classList.toggle("up");
    }

    async handleClick(e) {

        var body;

        let userName = localStorage.getItem("Name");
        let userMail = localStorage.getItem("Mail");

        if (this.props.room.tempAlarm) {
            this.props.customProp.restoreTempAlarm(this.props.room.roomId);
            body = JSON.stringify({
                "UserName": userName,
                "UserMail": userMail,
                "DeviceId": this.props.room.tempDevice,
                "RoomId": this.props.room.roomId
            });
            await RestoreAlarm(this.props.room.tempDevice);
        } else if (this.props.room.humidAlarm) {
            this.props.customProp.restoreHumidAlarm(this.props.room.roomId);
            body = JSON.stringify({
                "UserName": userName,
                "UserMail": userMail,
                "DeviceId": this.props.room.humidDevice,
                "RoomId": this.props.room.roomId
            });
            await RestoreAlarm(this.props.room.humidDevice);
        } else {
            alert("No alarms restored")
        }

        console.log(this.props.room);
        await postAlarmToDatabase(body);
    }


    render() {
        return (
            <div className="rooms" id={this.props.room.roomId}>
                <h5>{this.props.room.roomName}</h5>
                <h2>Alarm temp: {this.props.room.tempAlarm ? <p>ALARM TEMP TRIGGAT</p> : <p>INGET ALARM</p>}</h2>
                <h2>Alarm humid: {this.props.room.humidAlarm ? <p>ALARM HUMID TRIGGAT</p> : <p>INGET ALARM</p>}</h2>
                <button onClick={this.handleClick.bind(this)} className="alarmBtn">Återställ</button>
                <i className="arrow down" onClick={this.eventHandler}></i>
                {this.state.showmore === true ?
                    <div className="room-info">
                        <p>Temperatur: {this.props.room.tempValue}</p>
                        {this.props.room.humidValue != null ?
                            <p>Luftfuktighet: {this.props.room.humidValue}</p> : <></>}
                        <p>Uppdaterad: {this.props.room.time}</p>
                        <p><b><Link to={`/alarmdetails/${this.props.room.roomId}`}>Alarm Details</Link></b></p>
                    </div> : <></>}


            </div>
        );
    }
}