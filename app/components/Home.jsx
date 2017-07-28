import React, { Component } from 'react'
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom'


export default class Home extends Component {
  constructor(props) {
    super(props)
    // this.state = {
    //   isClick: false
    // }
  }
  render() {
    return(
      <div>
      <div onClick={() => this.props.transferMsg()}>
        <h1>Hello,world!I am home</h1>
        <Link to="/login">login111</Link>
      </div>
      </div>
    )
  }
};
