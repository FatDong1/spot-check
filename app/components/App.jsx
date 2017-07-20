import '../assets/stylesheets/base.css';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <h1>Hello,23333 {this.props.name}!</h1>
    )
  }
});

export default Hello;
