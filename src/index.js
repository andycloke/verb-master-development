import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from "react-router";

import routes from "./client/routes";

import spanishApp from './reducers';

const store = createStore(
  spanishApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>
  , document.getElementById('app'));
