import React from 'react';
import ReactDOM from 'react-dom';
import {router} from './router'
import './assets/css/reset.css';
import './assets/css/common.css';
import registerServiceWorker from './registerServiceWorker';
// import App from './App'
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
