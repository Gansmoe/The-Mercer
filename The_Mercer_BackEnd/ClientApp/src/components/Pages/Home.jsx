import React from 'react'
import { GetBuildings } from '../../Adapters/SmartHut'

const Home = () => {
  
  const TestRequest = async () => {
    const data = await GetBuildings();
    console.log(data);
  }

  return (
    <div className='home-page'>
      <h1>The Mercer</h1>
      <button onClick={TestRequest}>Testa</button>
    </div>
  )
}

export default Home