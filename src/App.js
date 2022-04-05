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

  const [isUserLoggedIn,setIsUserLoggedIn] = useState(true);

  if(isUserLoggedIn === false) {
    return <GuestGreeting />
  } else if(isUserLoggedIn === true){
    return <UserGreeting />
  }
}

export default App;
