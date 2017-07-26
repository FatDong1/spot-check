import React  from 'react'
import App    from './components/App.jsx'
import Login  from './components/Login.jsx'
import ReactDOM from 'react-dom';
import {
  Route
} from 'react-router-dom';
export default (
  <div>
    <Route  exact path="/" component={App}/>
    <Route  path="/login"  component={Login}/>     
  </div>
);