import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <>
        My Phone Number is {this.props.phNum} <br/>
        My Email is {this.props.email}
      </>
    )
  }
}

export default About

// rce for class component
// rafce for functional component