//引入依赖
import React from 'react';
import {BrowserRouter as Router,Route,Switch,} from 'react-router-dom'

//引入 pages
import App from './App';


//router配置
const router=(
  <Router>
    <Switch>
      <Route  path="/" component={App}></Route>
    </Switch>
  </Router>
);

export { router }