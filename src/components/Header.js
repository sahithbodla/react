import React from 'react';

const Header = (props) => {
    // console.log(props);
    let puppy = {
        breed: "Lab",
        age: 2,
        color: "green"
    }

    // Object Destructuring
    /*
    let breed = puppy.breed;
    let age = puppy.age;
    let color = puppy.color;
    */

    let {breed,age,color} = puppy;
    console.log(breed,age,color);

    let {name,city,children} = props;

    return (
        <>
        <p>Hello {name}, {city}, {props.pincode}</p>
        {children}
        </>
    )
}

Header.defaultProps = {
    city: "Dehradun",
    pincode: '444444',
    name: "Raju"
}

// props drilling

export default Header;

// function Header() {

// }