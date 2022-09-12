import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './components/Login';

const App = () => {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App