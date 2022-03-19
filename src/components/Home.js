import React from 'react';
import Header from './Header';
import './Home.css';

// Functional Component
const Home = (props) => {
    // console.log(props, typeof props);
    return (
        <React.Fragment>
            <Header {...props} />
            <h1 className="mystyle">Your Pincode is {props.pincode} and you are located in {props.city} city</h1>
        </React.Fragment>    
);
}

Home.defaultProps = {
    city: "Dehradun",
    pincode: '444444',
    name: "Raju"
}

export default Home;