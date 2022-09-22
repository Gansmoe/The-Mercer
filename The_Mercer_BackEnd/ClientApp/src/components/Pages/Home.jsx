import React, { useRef } from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';
import Rooms from '../home components/rooms';
import { MatchValues } from '../../Helpers/Calculation';
import { copyTelemetryData, getTempData } from '../../Helpers/mockupobject';
import { previousDay } from 'date-fns';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      rooms: [],
      telemetryData: [],
      alarmData: []
    };
  }



  getRooms = async () => {
    const [data, error] = await getRoomsFromDatabase();
    if (error) {
      console.log(error);
    } else {
      this.setState({ rooms: data }/* , () => { console.log(data); } */);

    }
  }

  componentDidMount() {
    OpenSignalRConnection(this.callBacksObject);
    this.getRooms();
  }

  componentDidUpdate() {

    setTimeout(() => {
      this.setState({ rooms: MatchValues(this.state.telemetryData, this.state.rooms)});
    }, 100);
  }

  callBacksObject = {
    telemetryMsg: (data) => {
      this.setState({ telemetryData: data });
    },
    alarmMsg: (data) => {
      this.setState({ alarmData: data });
    },
    tempData: (data) => {
      this.setState({ tempData: data });
    }
  }

  render() {
    console.log("Rooms: ", this.state.rooms);
    console.log("TelemetryData: ", this.state.telemetryData);

    return (
      <div className='home-page' >
        <div className="rooms-container">
          {(this.state.rooms == null) ? <></> : <SearchBar list={this.state.rooms} filterprop={'roomName'} customkey={'roomId'} Comp={Rooms} placeholder={'Filter rooms...'} />}
        </div>
      </div>
    )
  }
}
