import ReactDOM from 'react-dom';
import {router} from './router';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import App from './App'
ReactDOM.render(router, document.getElementById('root'));
registerServiceWorker();
