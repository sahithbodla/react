import React from 'react';

const Header = (props) => {
    // console.log(props);
    return (
        <p>Hello {props.name}, {props.city}, {props.pincode}</p>
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