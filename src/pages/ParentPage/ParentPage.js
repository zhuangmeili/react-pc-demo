import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ParentPage.css';

import './ParentPage.css';

import Dollar from '../../components/Dollar/Dollar';


class ParentPage extends Component {
  constructor(props){
    super(props);
    this.state={
      dollar:'',
      yuan:''
    }

  }
  //event
  dollarInput=(value)=>{
    this.setState({
      dollar:  value,
      yuan:   value === '' ? '' : value * 6.7951
    });
  }
  yuanInput=(value)=>{
    this.setState({
      dollar: value === '' ? '' : value * 0.1472,
      yuan: value,
    });
  }

  render() {

    return (
      <div className="">
        <header styleName="header">组件状态提升</header>
        <main styleName="container">
          美元
          <br/>
          <Dollar type = {'d'} dollarChange = {this.dollarInput} money = {this.state.dollar}/>
          <br/>
          <br/>
          人民币
          <br/>
          <Dollar type = {'y'} dollarChange = {this.yuanInput} money = {this.state.yuan}/>
        </main>
      </div>
    );
  }
}

export default CSSMudules(ParentPage,styles);