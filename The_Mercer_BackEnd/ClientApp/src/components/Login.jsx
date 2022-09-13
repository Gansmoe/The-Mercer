import React from 'react'
import { useState } from 'react';
import { AuthenticateRequest } from '../Adapters/Authenticate';
import { HandshakeRequest } from '../Adapters/Authenticate';

const Login = ({ AuthenticateUser }) => {

  const submitHandler = async (e) => {
    e.preventDefault();
    const requestData = await AuthenticateRequest();
    
    AuthenticateUser(requestData);
    
    if (requestData.status = 200) {
      const handsakeRes = await HandshakeRequest();
      console.log(handsakeRes);
      localStorage.setItem("SmartHutToken", handsakeRes[0].accessToken);
      localStorage.setItem("SmartHutUrl", handsakeRes[0].url);
    } else {
      alert("Couldn't log in. Check that your E-mail adress is correct, otherwise contact IT-department")
    }
  }

  return (

    <div className='container'>
      <div className='login-info'>
        <h1>The Mercer Hotel sensor system</h1>
        <p>To sign in, please use your mercer hotel E-mail</p>
      </div>
      <div className='login-container'>
        <form onSubmit={submitHandler}>
          <input className='login-btn' type="submit" value="Sign in with E-mail" />
        </form>
      </div>
    </div>
  )
}

export default Login