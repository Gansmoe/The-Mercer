import React from 'react'
import { GetBuildings, GetDevices } from '../../Adapters/SmartHut'
import Rooms from '../home components/rooms';
import SearchBar from '../SearchBar';

const Home = () => {

  const [buildings, setBuildings] = React.useState(null);
  const [devices, setDevices] = React.useState(null);

  const TestRequest = async () => {
    const data = await GetBuildings();
    setBuildings(data);
    console.log(data);
  }

  const TestRequest2 = async () => {
    const data = await GetDevices();
    setDevices(data);
    console.log(data);
  }

  return (
    <div className='home-page'>
      <h1>The Mercer</h1>
      <SearchBar list={devices != null ? devices[0].devices : []} />
      <button onClick={TestRequest}>Få byggnaden</button>
      <button onClick={TestRequest2}>Få alla devices</button>

      <div className="rooms-container">

        {(buildings == null) ? <></> : <p>{buildings[0].name}</p>}

        {(devices == null) ? <></> : <>{devices[0].devices.map((devices) => (
          <Rooms key={devices.id} device={devices} />
        ))}</>}

      </div>

    </div>
  )
}

export default Home