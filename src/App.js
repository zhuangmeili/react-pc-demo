import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import CSSModules from 'react-css-modules';
import styles from './App.css';

//组件引入
import HomePage from './pages/HomePage/HomePage';
import MinePage from './pages/MinePage/MinePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div styleName="appWrap">
          {/* left */}
          <aside styleName="appLeft">
            <ul styleName="appList">
              <li><NavLink styleName="link" activeClassName="cur" to="/home">HomePage</NavLink></li>
              <li><NavLink styleName="link" activeClassName="cur" to="/mine">MinePage</NavLink></li>

            </ul>
          </aside>
          {/* right */}
          <main styleName="appRight">
            <Route key="1"  path="/home" component={HomePage  }></Route>
            <Route  key="2" path="/mine" component={MinePage}></Route>
          </main>
        </div>
      </Router>
    );
  }
}


export default CSSModules(App, styles );
