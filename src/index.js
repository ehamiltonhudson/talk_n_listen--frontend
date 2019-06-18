import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux’;
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import rootReducer from './reducers/rootReducer';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
