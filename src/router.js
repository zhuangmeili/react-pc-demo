//引入依赖
import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

//引入 pages
import App from './App';
import HomePage from './pages/HomePage';


//router配置
const router=(
  <Router>
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/home" component={HomePage}></Route>
    </Switch>
  </Router>
);

export { router }