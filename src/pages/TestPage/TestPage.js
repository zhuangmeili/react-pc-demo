import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './TestPage.css';

// 组件消息框
import ComDialog from '../../components/ComDialog/ComDialog';
class FormPage extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      isChecked:false
    }

  }
  componentDidMount(){
    console.log(this.refs.submitBtn)
  }

  render() {
    return (
      <div className="">
        <button type="button" ref='submitBtn'>按钮</button>
        <ComDialog title='welcome here' message=' Thanks for visting our spacecraft !! '>
        {/* this.props.children*/}
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </ComDialog>
        <div>
          haha
          {
            this.state.length &&
            <a href="#"> haha</a>
          }
          <br/>
          {/* 输出 false true null undefined 需要先转换为字符串*/}
          判断元素 { String(this.state.isChecked)}
        </div>


      </div>
    );
  }
}

export default CSSMudules(FormPage,styles);