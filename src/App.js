import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
      <div className="container">
        <Navbar title="User App2"/>
        <hr/>
        <User name="Taha Demir" department="IT"/>
        <User name="Zulal Demir" salary="6000" department="IT"/>
      </div>
  );
}

export default App;