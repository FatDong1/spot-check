import React, { Component } from 'react'
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import '../assets/components/menubar.css'

export default class Menubar extends Component {

  render() {
    return(
      <div>
        <ul className="menubar-box">
          <li>
            <p>系统管理</p>
          </li>
          <li>
            <p className="lalala">设备信息</p>
            <p className="none">hello</p>
          </li>          
        </ul>
      </div>
    )
  }
};