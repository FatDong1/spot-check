import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes.jsx';
import thunk from 'redux-thunk'
import reducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { createHashHistory } from 'history';
import { HashRouter, Route } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin()
const history = createHashHistory()

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

ReactDom.render(
  <Provider  store={store}>
  <MuiThemeProvider>
    <HashRouter>
      {routes}
    </HashRouter>
  </MuiThemeProvider>
  </Provider>, document.getElementById('root'));
