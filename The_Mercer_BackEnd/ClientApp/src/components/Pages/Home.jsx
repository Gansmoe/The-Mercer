import React from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';
import Rooms from '../home components/rooms';
import { MatchValues } from '../../Helpers/Calculation';
import { getTempData } from '../../Helpers/mockupobject';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buildings: [],
      rooms: [],
      telemetryData: null,
      alarmData: [],
      tempData: null
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
    /* OpenSignalRConnection(this.callBacksObject); */
    this.getRooms();
/*     getTempData(this.callBacksObject); */
  }

  componentDidUpdate() {
    getTempData(this.callBacksObject);
    /* this.setState({ rooms: MatchValues(this.state.telemetryData, this.state.rooms)}); */
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
/*     console.log("Alarmdata in Home: ", this.state.alarmData); */
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
