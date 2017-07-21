import '../assets/stylesheets/base.css';
import React, { Component } from 'react';

const Hello = React.createClass({
  render() {
    return(
      <h1>Hello,啦啦啦 {this.props.name}!</h1>
    )
  }
});

export default Hello;
