import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Pages/Home';
import { useState, useEffect } from 'react';
import { AuthenticateRequest } from './Adapters/Authenticate';
import { HandshakeRequest } from './Adapters/Authenticate';


const App = () => {
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

  }

  AuthenticateUser();

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="" element={<Home />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App