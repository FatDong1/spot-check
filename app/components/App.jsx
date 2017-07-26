import React, { Component }       from 'react'
import { Link, Route }            from 'react-router-dom'
import Login                      from './Login.jsx'
import Menubar                    from './Menubar'

export default class App extends Component {
  render() {
    return(
      <div>
      <Menubar />
      <h1>Hello,world!</h1>
      <Link to="/login">login111</Link>
      {/* <Route path="/login" component={Login}/> */}
      </div>
    )
  }
};
