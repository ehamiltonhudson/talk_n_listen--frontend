import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import { createStore, applyMiddleware, compose } from 'redux’;
import { BrowserRouter as Router } from 'react-router-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
// import App from './App';
import Routes from './Routes';
import rootReducer from './reducers/rootReducer';
import { API_WS_ROOT } from './constants/Constants';
import * as serviceWorker from './serviceWorker';


const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
  <Provider store={store}>
    <ActionCableProvider url={API_WS_ROOT}>
      <Router>
        <Routes />
      </Router>
    </ActionCableProvider>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
