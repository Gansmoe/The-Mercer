import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Error } from './components/Pages/Error';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { AuthenticateRequest } from './Adapters/Authenticate';
import { HandshakeRequest } from './Adapters/Authenticate';
import Header from './components/header/Header';
import { SET_ACTIVE_USER } from './redux/slice/authSlice';
import { addNotice } from './redux/slice/noticeStackSlice';
import { useDispatch } from "react-redux";
import Alarms from './components/Pages/Alarms';
import { AlarmDetails } from './components/Pages/AlarmDetails';


const App = () => {

  const dispatch = useDispatch();
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("AuthenticateToken");
    if (getToken !== null) {
      setToken(getToken);
    }

  }, []);

  const AuthenticateUser = async () => {
    const requestData = await AuthenticateRequest();

    localStorage.setItem("AuthenticateToken", requestData[0].jwt);
    localStorage.setItem("Mail", requestData[0].email);
    localStorage.setItem("Name", requestData[0].name);

    const handshakeRes = await HandshakeRequest(requestData[0].email);

    localStorage.setItem("SmartHutToken", handshakeRes[0].accessToken);
    localStorage.setItem("SmartHutUrl", handshakeRes[0].url);


    if (handshakeRes[0].accessToken) {
      console.log('RRRR auth ', (handshakeRes[0].accessToken))
      dispatch(SET_ACTIVE_USER(requestData[0]))
    }
  }

  AuthenticateUser();


  return (
    <div className='App anim-fade'>
      <Error>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/alarms" element={<Alarms />}></Route>
            <Route path="/alarmdetails/:id" element={<AlarmDetails />}></Route>
          </Routes>
        </Router>
        <div className='footer no-select'>
          <Footer />
        </div>
      </Error>
    </div >
  )
}

export default App