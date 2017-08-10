import React, { Component } from 'react';
import {BrowserRouter as Router,Route,NavLink} from 'react-router-dom'
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import MinePage from './pages/MinePage/MinePage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="appWrap">
          {/* left */}
          <aside className="appLeft">
            <ul className="appList">
              <li><NavLink className="link" activeClassName="cur" to="/home">HomePage</NavLink></li>
              <li><NavLink className="link" activeClassName="cur" to="/mine">MinePage</NavLink></li>

            </ul>
          </aside>
          {/* right */}
          <main className="appRight">
            <Route key="1"  path="/home" component={HomePage  }></Route>
            <Route  key="2" path="/mine" component={MinePage}></Route>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
