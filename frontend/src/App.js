import './App.css';
import React from 'react';
import HomeScreen from "./screens/HomeScreen";
import Login from './screens/Login';
import Register from './screens/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </Router>
  );
}
