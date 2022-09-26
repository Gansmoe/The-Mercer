import React, { useRef } from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';
import Rooms from '../home components/rooms';
import { MatchValues, ChangeHumidBool, ChangeTempBool } from '../../Helpers/Calculation';
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
      // clears the token if it is invalid
      localStorage.clear();
      // clears all cookies
      const cookies = document.cookie;

      for (const myCookie of cookies.split(';')) {
        const pos = myCookie.indexOf('=');
        const name = pos > -1 ? myCookie.substr(0, pos) : myCookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
      }
      window.location.reload();
    } else {
      this.setState({ rooms: data });

    }
  }

  getUnitFromSmartHut = async () => {
    const [data, error] = await getUnitsForDevices();
    if (error) {
      console.log(error);
    } else {
      this.setState({ units: data })
    }
  }

  getDevicesFromSmartHut = async () => {
    const [data, error] = await GetDevices();
    if (error) {
      console.log(error);
    } else {
      this.setState({ range: data.devices })
    }
  }

  componentDidMount() {
    OpenSignalRConnection(this.callBacksObject);
    this.getRooms();
    this.getUnitFromSmartHut();
    this.getDevicesFromSmartHut();
  }

  callBacksObject = {
    telemetryMsg: (data) => {
      this.setState({ rooms: MatchValues(data, this.state.rooms, this.state.range) });
    },
    alarmMsg: (data) => {
      this.setState({ alarmData: data });
    },
    restoreTempAlarm: (id) => {
      this.setState({ rooms: ChangeTempBool(this.state.rooms, id) });
    },
    restoreHumidAlarm: (id) => {
      this.setState({ rooms: ChangeHumidBool(this.state.rooms, id) });
    }
  }

  render() {
    //console.log("Rooms: ", this.state.rooms);
    //console.log("Alarm: ", this.state.alarmData);

    return (
      <div className='home-page' >
        <div className="rooms-container">
          {(this.state.rooms == null) ? <></> : <SearchBar list={this.state.rooms} filterprop={'roomName'} customkey={'roomId'} Comp={Rooms} placeholder={'Filter rooms...'} customProp={this.callBacksObject} />}
        </div>
      </div>
    )
  }
}
