import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './FormPage.css';

import './FormPage.css';
class FormPage extends Component {
  constructor(props){
    super(props);
    this.state={
      formName:'',
      formSelect:'北京item2',
      formArea:'',
      isChecked:false
    };
  }
  //event
  handleChange=(e)=>{
    const target=e.target;
    const name=target.name;

    const value= target.type==='checkbox'? target.checked : target.value;
    //这里name是变量所以要用[]括起来
    this.setState({
      [name]:value,
    });
  }

  //event
  handleSubmit=(e)=>{
    alert(`name is: ${this.state.formName} ,select is:${this.state.formSelect}, area is: ${this.state.formArea}`)
    e.preventDefault();
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

            {/* boolean 属性的设置*/}
            <input type="text" autoFocus={true}/>
            <br/>
            <br/>
            <label>
              复选 ：
              <input type="checkbox" name='isChecked' checked={this.state.isChecked} onChange={this.handleChange}/>
            </label>

            <br/>
            <br/>
            所在城市
            <br/>
            <select styleName="formSelect" name="formSelect" id="supSelect" value={this.state.formSelect} onChange={this.handleChange}>
              <option value="北京item1">item1</option>
              {/*proxyConsole.js:56 Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.*/}
              {/*<option value="北京item2" selected>item2</option>*/}

              <option value="北京item2">item2</option>
              <option value="北京item3">item3</option>
              <option value="北京item4">item4</option>
            </select>
            <br/>
            <br/>

            <textarea styleName="formArea"  name='formArea' value={this.state.formArea} onChange={this.handleChange} placeholder={'请填写内容'}></textarea>
            <br/>
            <br/>
            <button type="submit" styleName="btnDefault">提交</button>
          </form>
        </main>

      </div>
    );
  }
}

export default CSSMudules(FormPage,styles);