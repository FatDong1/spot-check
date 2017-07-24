import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import routes from './routes.jsx';
import thunk from 'redux-thunk'
import reducer from './reducers'
import { browserHistory, Router } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { createHashHistory } from 'history';

const history = createHashHistory()

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

render(
  <Provider  store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>, document.getElementById('root'));
