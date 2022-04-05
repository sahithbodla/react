import './App.css';
import About from './components/About';
import Home from './components/Home';
import React,{useState} from 'react';
import Contact from './components/Contact';

const GuestGreeting = () => {
  return (
    <h1>Please sign up!</h1>
  )
}

const UserGreeting = () => {
  return (
    <h1>Welcome back!</h1>
  )
}

function App() {

  let error='ERROR';
  return (
    <>
      {error && <h1>{error}</h1>}
    </>
  )
  
  
}

export default App;
