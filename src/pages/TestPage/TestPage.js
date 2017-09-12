import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './TestPage.css';

class FormPage extends Component {
  constructor(props){
    super(props);

  }
  componentDidMount(){
    console.log(this.refs.submitBtn)
  }

  render() {
    return (
      <div className="">

        <button type="button" ref='submitBtn'>按钮</button>

      </div>
    );
  }
}

export default CSSMudules(FormPage,styles);