import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import { useState, useEffect } from 'react';
import { AuthenticateRequest } from './Adapters/Authenticate';
import { HandshakeRequest } from './Adapters/Authenticate';
import Header from './components/header/Header';
import { SET_ACTIVE_USER } from './redux/slice/authSlice';
import { useDispatch } from "react-redux";





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

    const handsakeRes = await HandshakeRequest(requestData[0].email);

    localStorage.setItem("SmartHutToken", handsakeRes[0].accessToken);
    localStorage.setItem("SmartHutUrl", handsakeRes[0].url);
    
    if (handsakeRes[0].accessToken) {
       console.log('RRRR auth ', (handsakeRes[0].accessToken))
       dispatch(SET_ACTIVE_USER())
     }
  }

  AuthenticateUser();
 
  return (
    <div className='App'>
      
      <Header /> 
      <Router>
        
        <Routes>
          <Route path="" element={<Home />} />
          
        </Routes>
      </Router>
      <div className='footer no-select'>
          <Footer />
      </div>
    </div>
  )
}

export default App