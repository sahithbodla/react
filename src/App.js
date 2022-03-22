import './App.css';
import About from './components/About';
import Home from './components/Home';
import React,{useState} from 'react';

function App() {

  console.log(useState("Jack"));

  const [phoneNumber,setPhoneNumber] = useState([]);
  const [email,setEmail] = useState('bla@bla.com');

  let arr = ["Sahith",12345];

  /*
  // let name = arr[0];
  // let phNum = arr[1];

  // array destructuring
  let [name,phNum] = arr;
  */

  /*
  //Rest Operator
  function sum(a,b,c,...d){
    let sumOfRest = d.reduce((a,b)=>a+b);
    let sumOfNumbers = a+b+c+sumOfRest;
    return sumOfNumbers;
  }

  console.log(sum(1,2,3,3,3,3,5,10));
  */

  // let a = 100;
  // let b = 12;
  // let c = 15;

  /*
  //Spread Operator
  let arr = [100,12,15];
  console.log(...arr);
  console.log(arr)
  console.log(Math.max(...arr))
  console.log(Math.max(100,12,15))

  let person = {
    name: "Sahith",
    age: '30',
    pin: 507101
  }
  */

  function changeState(){
    setPhoneNumber("123");
  }

  return (
    <div className="App">
      <h1>I am inside App component</h1>
      <p>We are testing the working of React Components</p>
      <About phNum = {phoneNumber} email={email} />
      <button onClick={changeState}>Wanna see phonenumber?</button>
      <Home name="Sahith" pincode="507101" />
      <Home name="Toffi" city="Hyderabad" />
      <Home city="Bangalore" pincode="507103" />
    </div>
  );
}

export default App;
