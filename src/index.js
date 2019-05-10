import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import Provider from 'react-redux'
import manageUsers from './reducers/manageUsers'


// add imports and code
let strore = createStore(manageUsers,
              window._REDUX_DEVTOOLS_EXTENSION_ && window._REDUX_DEVTOOLS_EXTENSION_()
            );


ReactDOM.render(
  // add imports and code
  <App />
  // add imports and code
  ,
  document.getElementById('root')
);
