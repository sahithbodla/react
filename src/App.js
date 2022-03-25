import './App.css';
import About from './components/About';
import Home from './components/Home';
import React,{useState} from 'react';
import Contact from './components/Contact';

function App() {

  console.log(useState("Jack"));

  const [phoneNumber,setPhoneNumber] = useState(0);
  const [email,setEmail] = useState('bla@bla.com');

  function changeState(){
    setEmail("123");
  }

  function setData(phNum) {
    setPhoneNumber(phNum)
  }

  return (
    <div className="App">
      <Contact email={email} setData={setData} /> <br/>
      My Phone Number is {phoneNumber} I am from App Component
      {/* <h1>I am inside App component</h1>
      <p>We are testing the working of React Components</p>
      <About phNum = {phoneNumber} email={email} />
      <button onClick={changeState}>Wanna see phonenumber?</button>
      <Home name="Sahith" pincode="507101" />
      <Home name="Toffi" city="Hyderabad" />
      <Home city="Bangalore" pincode="507103" /> */}
    </div>
  );
}

export default App;
