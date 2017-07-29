import React, { Component } from 'react'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import AppBar from 'material-ui/AppBar';
// import { Link, Route,  BrowserRouter as Router, Switch } from 'react-router-dom'
import '../assets/components/header.css'


export default class Home extends Component {
  constructor(props) {
    super(props)
  }
  getStyles () {
    const styles = {
      badge: {
        padding: '5px',
      }
    }
    return styles
  }
  render() {
    const styles = this.getStyles()
    const leftPart = (
      <div>
        <h3 style={{color: '#fff'}}>设备点检系统</h3>
        <p>hello, 老大</p>
      </div>
    )
    const rightPart = (
      <Badge
        badgeContent={10}
        secondary={true}
        badgeStyle={{top: 0, right: 0}}
        style={styles.badge}
        >
          <IconButton tooltip="消息通知">
            <NotificationsIcon />
          </IconButton>
      </Badge>
    )
    return(
      <div className="header-box">
        <AppBar
          title=''
          iconElementLeft={leftPart} 
          iconElementRight={rightPart}
          iconStyleLeft={{marginTop: '5px'}}
          iconStyleRight={{marginTop: '5px'}}
          style={{zIndex: '0'}}
        />
      </div>
    )
  }
};