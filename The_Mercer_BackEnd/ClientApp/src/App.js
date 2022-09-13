import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Pages/Home';
import { useState, useEffect } from 'react';


const App = () => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = localStorage.getItem("AuthenticateToken");
    if (getToken !== null) {
      setToken(getToken);
    }

  }, []);

  const AuthenticateUser = async (data) => {
    console.log(data);
    localStorage.setItem("AuthenticateToken", data[0].jwt);
    localStorage.setItem("Mail", data[0].email);
    localStorage.setItem("Name", data[0].name);
  }

  return (
    <div className='App'>
      {(token !== "") ? (
        <Router>
          <Routes>
            <Route path="" element={<Home />} />
          </Routes>
        </Router>
      ) : (
        <Login AuthenticateUser={AuthenticateUser} />
      )}
    </div>
  )
}

export default App