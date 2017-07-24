import React  from 'react'
import Route  from 'react-router'
import App    from './components/App.jsx'
import Login  from './components/Login.jsx'
import Home   from './components/Home.jsx'
export default (
  <Route>
    <Route path="/" component={App}>
       <Route path="/home" component={Home}/> 
    </Route>
    <Route  path="/login"  component={Login}/>
  </Route>
);