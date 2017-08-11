import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import CSSModules from 'react-css-modules';
import styles from './App.css';

//组件引入
import HomePage from './pages/HomePage/HomePage';
import EventPage from './pages/EventPage/EventPage';
import RenderPage from './pages/RenderPage/RenderPage';
import ListPage from './pages/ListPage/ListPage';
import FormPage from './pages/FormPage/FormPage';
class App extends Component {
  render() {
    return (
      <Router>
        <div styleName="appWrap">
          {/* left */}
          <aside styleName="appLeft">
            <ul styleName="appList">
              <li><NavLink styleName="link" activeClassName="cur" to="/home">HomePage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/mine">EventPage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/render">RenderPage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/list">ListPage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/form">FormPage</NavLink></li>
            </ul>
          </aside>
          {/* right */}
          <main styleName="appRight">
            <Route  path="/home" component={HomePage  }></Route>
            <Route  path="/mine" component={EventPage}></Route>
            <Route  path="/render" component={RenderPage}></Route>
            <Route  path="/list" component={ListPage}></Route>
            <Route  path="/form" component={FormPage}></Route>
          </main>
        </div>
      </Router>
    );
  }
}


export default CSSModules(App, styles );
