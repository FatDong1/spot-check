import React, { Component } from 'react'
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom'


export default class Home extends Component {

  render() {
    return(
      <div>
        <p>hello world</p>
        <ul>
          <li><Link to="/login">login</Link></li>
          <li><Link to="/about">about</Link></li>
          
        </ul>
      </div>
    )
  }
};
