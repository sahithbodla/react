import React from 'react';
import Header from './Header';
import './Home.css';

// Functional Component
const Home = (props) => {

    /*
    // console.log(props, typeof props);

    let a = 123;
    let b = a;
    // console.log(a,b);

    a = 56;
    // console.log(a,b);

    let puppy = {
        breed: "Lab",
        age: 2
    }

    // let snoopy = puppy;
    // console.log(puppy);
    // console.log(snoopy);

    // puppy.color = "Brown";
    // console.log(puppy);
    // console.log(snoopy);

    // let snoopy = Object.assign({},puppy);
    let snoopy = {...puppy};
    console.log(puppy);
    console.log(snoopy);

    puppy.color = "Brown";

    console.log(puppy);
    console.log(snoopy);

    */

    // reduce
    let arr = [1,2,3];

    let sum = arr.reduce((accumulator,value) => accumulator+value)

    console.log(sum);


    return (
        <React.Fragment>
            <Header {...props} />
            <Header {...props}>
                <li>Bread</li>
                <li>Paneer</li>
            </Header>
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