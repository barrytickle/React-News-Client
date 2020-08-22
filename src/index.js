import React, {Component, useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import {Sidebar} from './components/sidebar';
import {AuthProvider} from './context/auth';


ReactDOM.render(
  <React.StrictMode>
          <div className="row">
              <div className="col-xs-12 col-md-4">
                  <AuthProvider>
                    <Sidebar/>
                  </AuthProvider>
              </div>
              <div className="col-xs-12 col-md-8">
                  <App />
              </div>
          </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
