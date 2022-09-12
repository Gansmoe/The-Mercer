import React from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
    let navigate = useNavigate();

    const testFunction = async () => {
      const { data } = await axios.get('https://localhost:5001/api/User', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*'
        }
      })
      console.log(data);
      return data;
    }

  return (
    <div>
        <p>Klick: <button onClick={() => testFunction()}>Microsoft Login</button></p>
    </div>
  )
}

export default Login