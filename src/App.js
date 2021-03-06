import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import CSSModules from 'react-css-modules';
import styles from './App.css';

//组件引入
import HomePage from './pages/HomePage/HomePage';
import EventPage from './pages/EventPage/EventPage';
import RenderPage from './pages/RenderPage/RenderPage';
import ListPage from './pages/ListPage/ListPage';
import LiftPage from './pages/LiftPage/LiftPage';
import FormPage from './pages/FormPage/FormPage';
import ParentPage from './pages/ParentPage/ParentPage';
import RequestPage from './pages/RequestPage/RequestPage';
import TestPage from './pages/TestPage/TestPage';
import ReduxPage from './pages/ReduxPage/ReduxPage';

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
              <li><NavLink styleName="link" activeClassName="cur" to="/lift">LiftPage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/parent">Parent</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/request">Request</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/test">TestPage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/redux">ReduxPage</NavLink></li>

            </ul>
          </aside>
          {/* right */}
          <main styleName="appRight">
            <Route  path="/home" component={HomePage  }></Route>
            <Route  path="/mine" component={EventPage}></Route>
            <Route  path="/render" component={RenderPage}></Route>
            <Route  path="/list" component={ListPage}></Route>
            <Route  path="/form" component={FormPage}></Route>
            <Route  path="/lift" component={LiftPage}></Route>
            <Route  path="/parent" component={ParentPage}></Route>
            <Route  path="/request" component={RequestPage}></Route>
            <Route  path="/test" component={TestPage}></Route>
            <Route  path="/redux" component={ReduxPage}></Route>
          </main>
        </div>
      </Router>
    );
  }
}


export default CSSModules(App, styles );
