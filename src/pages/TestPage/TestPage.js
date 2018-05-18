import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './TestPage.css';


// 组件消息框
import ComDialog from '../../components/ComDialog/ComDialog';
import ComColumns from '../../components/ComColumns/ComColumns';
class TestPage extends Component {
  constructor(props){
    super(props);
    this.state={
      list:[],
      isChecked:false
    }

  }
  componentDidMount(){
    console.log(this.inputElement)
    this.inputElement.focus();
  }

  render() {
    return (
      <div className="">
        <button type="button" ref='submitBtn'>按钮</button>
        {/* refs 和DOM 强制修改子元素 */}
        <ComDialog
          title='welcome here'
          message=' Thanks for visting our spacecraft !! '
          inputRef={el => this.inputElement = el }
        >
          {/* this.props.children*/}
          <ul>
            <li>item1</li>
            <li>item2</li>
            <li>item3</li>
          </ul>
        </ComDialog>
        <div>
          {/* 输出 false true null undefined 需要先转换为字符串*/}
          判断元素 { String(this.state.isChecked)}
        </div>


        {/* 代码片段 Columns*/}
        <table>
          <tr>
            {/* 报错 */}
            {/*<ComColumns/>*/}
          </tr>
        </table>


      </div>
    );
  }
}


export default CSSMudules(TestPage,styles);