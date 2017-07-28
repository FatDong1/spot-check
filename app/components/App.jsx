import React, { Component }       from 'react'
import { Link, Route }            from 'react-router-dom'
import Login                      from './Login.jsx'
import Menubar                    from './Menubar'
import Content                    from '../containers/Content.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickMenu: false
    }
  }
  transferMsg() {
    this.setState(function(prevState, props) {
      return {
        clickMenu: !prevState.clickMenu
      };
    });
  }
  render() {
    return(
      <div>
        <Menubar clickMenu = {this.state.clickMenu}/>
        <Content transferMsg = {() => this.transferMsg()}/>
      </div>
    )
  }
};
