import React, { useRef } from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';
import Rooms from '../home components/rooms';
import { MatchValues } from '../../Helpers/Calculation';
import { copyTelemetryData, getTempData } from '../../Helpers/mockupobject';
import { previousDay } from 'date-fns';
import { getUnitsForDevices } from '../../Adapters/SmartHut';
import { GetDevices } from '../../Adapters/SmartHut';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      rooms: [],
      telemetryData: [],
      alarmData: [],
      units: [],
      range: []
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

  getUnitFromSmartHut = async () => {
    const [data, error] = await getUnitsForDevices();
    if (error) {
      console.log(error);
    } else {
      this.setState({ units: data})
    }
  }

  getDevicesFromSmartHut = async () => {
    const [data, error] = await GetDevices();
    if (error) {
      console.log(error);
    } else {
      this.setState({ range: data.devices})
    }
  }

  componentDidMount() {
    OpenSignalRConnection(this.callBacksObject);
    this.getRooms();
    this.getUnitFromSmartHut();
    this.getDevicesFromSmartHut();
  }

  componentDidUpdate() {
    // setTimeout(() => {
    //   this.setState({ rooms: MatchValues(this.state.telemetryData, this.state.rooms, this.state.range)});
    // }, 100);
  }

  callBacksObject = {
    telemetryMsg: (data) => {
      this.setState({ rooms: MatchValues(data, this.state.rooms, this.state.range)});
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
    // console.log("TelemetryData: ", this.state.telemetryData);

    return (
      <div className='home-page' >
        <div className="rooms-container">
          {(this.state.rooms == null) ? <></> : <SearchBar list={this.state.rooms} filterprop={'roomName'} customkey={'roomId'} Comp={Rooms} placeholder={'Filter rooms...'} />}
        </div>
      </div>
    )
  }
}
