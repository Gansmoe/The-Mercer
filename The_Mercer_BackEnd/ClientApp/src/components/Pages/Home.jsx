import React from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';
import Rooms from '../home components/rooms';
import { MatchValues } from '../../Helpers/Calculation';

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
      this.setState({ rooms: data }, () => { console.log(data); });

    }
  }

  componentDidMount() {
    OpenSignalRConnection(this.callBacksObject);
    this.getRooms();

  }

  componentDidUpdate() {
    let object = {
      "deviceId": "2ecf8aef-bd10-4a53-af03-558ef550f8f7",
      "value": "23"
  }

  setTimeout(object, 1000);
  
    const test = MatchValues(object, this.state.rooms)
    console.log("testDataFörRum :)", test);
  }

  callBacksObject = {
    telemetryMsg: (data) => {
      this.setState({ telemetryData: data });
    },
    alarmMsg: (data) => {
      this.setState({ alarmData: data });
    }
  }

  render() {
    console.log("Telemetrydata in Home: ", this.state.telemetryData);
    console.log("Alarmdata in Home: ", this.state.alarmData);
    console.log("Rooms ", this.state.rooms);

    return (
      <div className='home-page' >
        <div className="rooms-container">
          {(this.state.rooms == null) ? <></> : <SearchBar list={this.state.rooms} filterprop={'roomName'} customkey={'roomId'} Comp={Rooms} placeholder={'Filter rooms...'} />}
        </div>
      </div>
    )
  }
}
