import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import App from './app';
import store from './store/';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <BrowserRouter>
                <App/>
            </BrowserRouter>
         </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
















































// "repository": {
//   "type": "git",
//   "url": "git+https://github.com/Hammadsoloman/store.git"
// },



// https://Hammadsoloman.github.io/store/