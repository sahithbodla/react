import React, { Component } from 'react'

export class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"Jack",
            phoneNumber: "989898",
            address: {
                street: "south wales",
                city: "Jersey",
                state: "LA"
            }
        }
    }
  render() {
    return (
      <>
        My Email is {this.props.email} <br/>
        <button
        onClick={() => this.setState({phoneNumber: "1234"})}
        >
            Change PhoneNumber state of Contact Component
        </button> <br/>
        My Phone Number is {this.state.phoneNumber} I am from Contact Component
        {this.props.setData(this.state.phoneNumber)}
      </>
    )
  }
}

export default Contact