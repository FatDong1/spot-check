import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton';
import '../assets/components/login.css'

export default class Login extends Component {
  componentDidMount () {
    console.log()
  }

  render() {
   
    return(
      <div className="login-box">
        <div className="login-form">
          <p className="login-title">设备点检系统</p>
          <TextField
            hintText="请输入你的账号"
            floatingLabelText="账号"
            floatingLabelFixed={true}
            style={{marginTop: 40, display: 'block', overflow: 'visible'}}
          />
          <TextField
            hintText=""
            floatingLabelText="密码"
            type="password"
            style={{display: 'block', marginBottom: 30}}
          />
          <div className="login-btn">
          <FlatButton label="注册" primary={true}/>
          <FlatButton label="登录" primary={true}/>
          </div>
        </div>
      </div>
    )
  }
}