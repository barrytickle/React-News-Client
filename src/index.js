import React, {Component, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { LocationDataProvider } from "./context/location";
import {RedirectProvider} from "./context/login";

ReactDOM.render(
 <LocationDataProvider>
     <RedirectProvider>
           <App/>
     </RedirectProvider>
 </LocationDataProvider>
      ,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
