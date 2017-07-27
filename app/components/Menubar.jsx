import React, { Component } from 'react'
import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import '../assets/components/menubar.css'

export default class Menubar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isClick: false
    }
  }
  handleClick () {
    this.setState({isClick: !this.state.isClick})
  }
  getStyles() {
    const styles = {
        submenu: {
            // width: '150',
        },
        leftpart: {
            width: '842',
            float:'left',
            marginRight: '10',
        }
        
    };
    return styles;
  }
  render() {
    const menuClick = this.state.isClick ? 'menubar-active' : ''
    const style = this.getStyles()
    return(
      <div>
        <ul className={`menubar-box ${menuClick}`} onClick={this.handleClick.bind(this)}>
          <li className="menubar-label">
            <FlatButton>系统管理(S)</FlatButton>
            <div className="menubar-submenu">
              <Paper>
                <Menu>
                  <MenuItem primaryText="权限授予" />
                  <MenuItem primaryText="退出系统" />
                </Menu>
              </Paper>
            </div>
          </li>
          <li className="menubar-label">
            <p>设备信息(P)</p>
            <Paper className="menubar-submenu"  style={style.submenu}>
              <Menu style={style.submenu}>
                <Link to="/login">
                  <MenuItem primaryText="导入设备" />
                </Link>
                <MenuItem primaryText="导出设备" />
                <MenuItem primaryText="设备查询" />
                <MenuItem primaryText="设备分类" />
              </Menu>
            </Paper>
          </li>          
        </ul>
      </div>
    )
  }
};