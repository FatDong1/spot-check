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
  // componentWillMount () {
  //   this.setState({isClick: this.props.clickMenu})
  //   console.log(this.state.isClick)
  // }
  handleClick () {
    this.setState(function(prevState, props) {
      return {
        isClick: !prevState.isClick
      };
    });
  }
  getStyles() {
    const styles = {
        submenu: {
          height: 25,
          lineHeight: '25px',
          minHeight: '25px',
          fontFamily: "微软雅黑",
          fontSize: '15px',
          marginTop: '-2px'         
        },
        btn: {
          fontFamily: "微软雅黑",
          padding: '0 5px 0 2px',
          height: 25,
          lineHeight: '25px'
        }
        
    };
    return styles;
  }
  render() {
    const menuClick = this.state.isClick ? 'menubar-active' : ''
    const style = this.getStyles()
    return(
      <div>
        <ul className={`menubar-box ${menuClick}`} onClick={() => this.handleClick()}>
          <li className="menubar-label">
            <FlatButton style={style.btn}>系统管理(S)</FlatButton>
            <Paper className="menubar-submenu">
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText="权限授予" />
                <MenuItem primaryText="退出系统" />
              </Menu>
            </Paper>
          </li>
          <li className="menubar-label">
            <FlatButton style={style.btn}>设备信息(P)</FlatButton>
            <Paper className="menubar-submenu" >
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText=""><Link to="/login">导入设备</Link></MenuItem>
                <MenuItem primaryText="导出设备" />
                <MenuItem primaryText="设备查询" />
                <MenuItem primaryText="设备分类" />
              </Menu>
            </Paper>
          </li>  
          <li className="menubar-label">
            <FlatButton style={style.btn}>人员管理(R)</FlatButton>
            <Paper className="menubar-submenu">
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText="人员导入" />
                <MenuItem primaryText="人员导出" />
                <MenuItem primaryText="人员查询" />
              </Menu>
            </Paper>
          </li>  
          <li className="menubar-label">
            <FlatButton style={style.btn}>标准化管理(B)</FlatButton>
            <Paper className="menubar-submenu">
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText="设备标准" />
                <MenuItem primaryText="故障标准" />
              </Menu>
            </Paper>
          </li>
          <li className="menubar-label">
            <FlatButton style={style.btn}>工单管理(G)</FlatButton>
            <Paper className="menubar-submenu">
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText="工单导入" />
                <MenuItem primaryText="工单导出" />
              </Menu>
            </Paper>
          </li>    
          <li className="menubar-label">
            <FlatButton style={style.btn}>工作管理(B)</FlatButton>
            <Paper className="menubar-submenu">
              <Menu menuItemStyle={style.submenu}>
                <MenuItem primaryText="日常点检" />
                <MenuItem primaryText="专业点检" />
                <MenuItem primaryText="精密点检" />                
              </Menu>
            </Paper>
          </li>             
        </ul>
      </div>
    )
  }
};