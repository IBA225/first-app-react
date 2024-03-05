import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup'
import Header from './Components/AdminPanel/Header';
import Sidebar from './Components/AdminPanel/Sidebar';
import Home from './Components/AdminPanel/Home';

function App() {
  
  return (
    <div >
      <Header/>
      <Sidebar/>
      <Home/>
    </div>
  );
}

export default App;
