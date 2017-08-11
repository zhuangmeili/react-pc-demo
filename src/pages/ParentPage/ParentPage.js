import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ParentPage.css';

import './ParentPage.css';

import Child from '../../components/Child/Child';


class ParentPage extends Component {
  constructor(props){
    super(props);
    this.state={
      //温度
      formTemper:''
    }

  }
  //event
  handleChange=(event)=>{
    console.log(event.target.value);
    this.setState({
      formTemper:event.target.value
    })
  };


  render() {
    const formTemper=this.state.formTemper;
    return (
      <div className="">
        <header styleName="header">组件之间数据</header>
        <main styleName="container">
          <form >
            <br/>
            输入温度:
            <br/>
            <input type="text" value={formTemper} styleName="formInp" onChange={this.handleChange} />

            <br/>
            <br/>

            组件如下：
            <Child celsius={parseFloat(formTemper)}/>
          </form>
        </main>

      </div>
    );
  }
}

export default CSSMudules(ParentPage,styles);