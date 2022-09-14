import React, { useEffect } from 'react'
import { GetBuildings, GetDevices } from '../../Adapters/SmartHut'
import Rooms from '../home components/rooms';
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';

const Home = () => {

  const [buildings, setBuildings] = React.useState(null);
  const [devices, setDevices] = React.useState(null);
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {
    const getRooms = async () => {
      const [data, error] = await getRoomsFromDatabase();
      if (error) {
        console.log(error);
      } else {
        setRooms(data);
        console.log(data);
      }
    }

    getRooms();

  }, []);


  const TestRequest2 = async () => {
    const data = await GetDevices();
    setDevices(data);
    console.log(data);
  }

  return (
    <div className='home-page'>
      <h1>The Mercer</h1>
      {(rooms == null) ? <></> : <SearchBar list={rooms} componentType={Element.Rooms} />}
      <div className="rooms-container">

        {(rooms == null) ? <></> : <>{rooms.map((room) => (
          <Rooms key={room.roomId} room={room} />
        ))}</>}

      </div>

    </div>
  )
}

export default Home