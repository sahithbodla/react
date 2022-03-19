import React from 'react';
import './Home.css';

// Functional Component
const Home = (props) => {
    console.log(props, typeof props);
    const nameOfPerson=props.name;
    const pin = props.pincode;
    const city = props.city;
    return (
        <React.Fragment>
            <h1 className="mystyle">Hello {nameOfPerson}, your Pincode is {pin} and you are located in {city} city</h1>
            <p>I just created my first react component</p>
        </React.Fragment>    
);
}

export default Home;