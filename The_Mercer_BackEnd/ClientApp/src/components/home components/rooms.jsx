import React from "react";
import { RestoreAlarm } from "../../Adapters/SmartHut";
import { postAlarmToDatabase } from "../../Adapters/Database";
import { Link } from "react-router-dom";
import AddNotice from "../AddNotice";
import { MatchUnit } from "../../Helpers/Calculation";
import { RiTempColdLine } from 'react-icons/ri'
import { WiHumidity } from 'react-icons/wi'




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

    getAlarmClassName() {
        if (this.props.room.tempAlarm === true) {
            return "alarm";
        } else if (this.props.room.humidAlarm === true) {
            return "alarm";
        } else {
            return "no-alarm";
        }
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

        await postAlarmToDatabase(body);
    }

    render() {
        return (

            <div className={this.getAlarmClassName()} id={this.props.room.roomId} >

                {this.props.room.tempAlarm || this.props.room.humidAlarm? <AddNotice msg={`👁‍🗨 ${this.props.room.roomName} has a an alarm!`} type='info' callback={['scrollToElementId', [this.props.room.roomId]]}/> : <></>}

                <h5>{this.props.room.roomName}</h5>
                <h6>{this.props.room.tempAlarm || this.props.room.humidAlarm ? <>ALARM {this.props.room.tempAlarm ? <p>Temperature</p> : <></>}{this.props.room.humidAlarm ? <p>Humidity</p> : <></>} </> : <p className="alarmOk">OK</p>}</h6>
                <button onClick={this.handleClick.bind(this)} className="alarmBtn">Restore</button>
                <i className="arrow down" onClick={this.eventHandler}></i>
                {this.state.showmore === true ?
                    <div className="room-info">
                        <p><RiTempColdLine size={25}/> {this.props.room.tempValue} {this.props.room.tempUnit}</p>
                        {this.props.room.humidValue != null ?
                            <p><WiHumidity size={25}/> {this.props.room.humidValue} {this.props.room.humidUnit}</p> : <></>}
                        <p>Updated: {this.props.room.time}</p>
                        <p><b><Link to={`/alarmdetails/${this.props.room.roomId}`}>Alarm Details</Link></b></p>
                    </div> : <></>}
            </div>
        );
    }
}

/* function mapDispatchToProps (dispatch) {
    return bindActionCreators({ addNotice }, dispatch);
  } */


/* const mapDispatchToProps = (dispatch) => {
    return {
        addNotice: addNotice()
    }
};

export default connect(null, mapDispatchToProps())(Rooms); */