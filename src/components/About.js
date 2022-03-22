import React, { Component } from 'react'

export class About extends Component {
  // State creation
  constructor(props){
    super(props);
    this.state = {
      phoneNumber: props.phNum,
      email:props.email
    }
    this.changeState = this.changeState.bind(this)
  }

  changeState() {
    // Change the value of state
    this.setState({ phoneNumber: "123",email: "abc@abc.com"});
    // This is a bad way of updating state
    // this.state.phoneNumber="123";
  }

  render() {
    return (
      <>
        My Phone Number is {this.props.phNum} and I am from props <br/>
        My Email is {this.props.email} and I am from props <br/>
        {/* Accessing State */}
        My Phone Number is {this.state.phoneNumber} and I am from State <br/>
        My Email is {this.state.email} and I am from State <br/>
        <button onClick={this.changeState}>Click Me</button> <br/>
      </>
    )
  }
}

export default About

// rce for class component
// rafce for functional component