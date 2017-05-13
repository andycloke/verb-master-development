import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, hashHistory } from "react-router";
import ReactGA from 'react-ga';


import routes from "./client/routes";
import spanishApp from './reducers';

ReactGA.initialize('UA-99045445-1');

function logPageView() {
  ReactGA.set({ page: window.location.pathname + window.location.search });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const store = createStore(
  spanishApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} onUpdate={logPageView}  />
  </Provider>
  , document.getElementById('app'));
