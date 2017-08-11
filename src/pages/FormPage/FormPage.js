import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './FormPage.css';

import './FormPage.css';
class FormPage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="">
        <header styleName="header">This is FormPage</header>

      </div>
    );
  }
}

export default CSSMudules(FormPage,styles);