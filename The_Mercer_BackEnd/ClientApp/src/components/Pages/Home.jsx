import React from 'react'
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';
import { OpenSignalRConnection } from '../../Adapters/Signalr';

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

    return (
      <div className='home-page' >
        <div className="rooms-container">
          {(this.state.rooms == null) ? <></> : <SearchBar list={this.state.rooms} />}
        </div>
      </div>
    )
  }
}