import React, { Component } from 'react'
import { Link } from 'react-router'
const Hello = React.createClass({
  render() {
    return(
      <div>
      <h1>Hello,world!</h1>
      <Link to="login">login</Link>
      </div>
    )
  }
});

export default Hello;
