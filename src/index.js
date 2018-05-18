import React from 'react'
import ReactDOM from 'react-dom';
import {router} from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';


//redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './redux/reducers';
const store=createStore(rootReducer);
//:redux end


// import App from './App'
ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
