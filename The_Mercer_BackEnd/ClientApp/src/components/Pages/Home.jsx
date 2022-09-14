import React from 'react'
import { GetBuildings, GetDevices } from '../../Adapters/SmartHut'

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
      <button onClick={TestRequest}>Få byggnaden</button>
      <button onClick={TestRequest2}>Få alla devices</button>
      
      {(buildings == null) ? <p>no data</p> : <p>{buildings[0].name}</p>}

      {(devices == null) ? <p>no data</p> : <p>{devices[0].devices.map((devices) => (
        <p>{devices.name}</p>
      ))}</p>}

    </div>
  )
}

export default Home