import React, { useEffect } from 'react'
import { GetBuildings, GetDevices } from '../../Adapters/SmartHut'
import Rooms from '../home components/rooms';
import { getRoomsFromDatabase } from '../../Adapters/Database';
import SearchBar from '../SearchBar';

const Home = () => {
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

  return (
    <div className='home-page'>
      <div className="rooms-container">
      {(rooms == null) ? <></> : <SearchBar list={rooms} />}
      </div>
    </div>
  )
}

export default Home