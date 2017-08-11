import React, { Component } from 'react';
import './HomePage.css';


//其他子组件
import HelloMessage from '../../components/HelloMessage/HelloMessage';
import StateTimer from '../../components/StateTimer/StateTimer';
import CSSModules from  'react-css-modules';
import styles from './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="">
        <HelloMessage/>
        <div className="divider"></div>

        <StateTimer/>
      </div>
    );
  }
}

export default CSSModules(HomePage,styles);