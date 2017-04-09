import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedApp, App } from './App';
import { rootReducer } from './reducers/rootReducer';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import { connect } from 'react-redux';
// import buttonGroupInstance from './components/filterButtonGroup'

const composeStoreWithMiddleware = applyMiddleware( promiseMiddleware())(createStore);
const store = composeStoreWithMiddleware(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>,
  document.getElementById('root')
);

if (module.hot) {
module.hot.accept()
}
