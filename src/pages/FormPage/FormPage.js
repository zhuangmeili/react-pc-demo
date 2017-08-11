import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './FormPage.css';

import './FormPage.css';
class FormPage extends Component {
  constructor(props){
    super(props);
    this.state={formName:"",formSelect:""};
  }
  //event
  handleChange=(event)=>{
    const target=event.target;
    const name=target.name;

    const value=target.value;
    console.log("value:"+value);
    this.setState({
      [name]:value,
    });
  }

  //event
  handleSubmit=(event)=>{
    alert(" name is :"+this.state.formName+"/n select is:"+this.state.formSelect);
    event.preventDefault();
  }

  render() {
    return (
      <div className="">
        <header styleName="header">This is FormPage</header>
        <main styleName="container">
          <form onSubmit={this.handleSubmit}>
            <br/>
            name:
            <br/>
            <input type="text" name="formName" styleName="formInp" value={this.state.formName} onChange={this.handleChange} />
            <br/>
            <br/>
            所在城市
            <br/>
            <select styleName="formSelect" name="formSelect" id="supSelect" value={this.state.formSelect} onChange={this.handleChange}>
              <option value="北京item1">item1</option>
              <option value="北京item2">item2</option>
              <option value="北京item3">item3</option>
              <option value="北京item4">item4</option>
            </select>
            <br/>
            <button type="submit" styleName="btnDefault">提交</button>
          </form>
        </main>

      </div>
    );
  }
}

export default CSSMudules(FormPage,styles);