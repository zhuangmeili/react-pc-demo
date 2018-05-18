import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ComDialog.css';

// proptypes 仅仅在开发模式中使用
import PropTypes from 'prop-types';

class ComDialog extends Component {
  constructor(props){
    super(props);

  }
  focus=()=>{
    this.focusInput.focus();
  }

  render() {
    return (
      <div styleName="dialog">
        <header styleName='header'>{ this.props.title}</header>
        <main styleName="content">
          <p>{this.props.message}</p>
          {this.props.children}
          {/* ref作为特殊的props传递 */}
          <input styleName='inputTxt' type="text" ref={this.props.inputRef} placeholder='通过props获得焦点'/>

          <br/>
          <br/>

          <input styleName='inputTxt' ref={el=>this.focusInput=el } type="text" defaultValue='点击获得焦点'/>

          <button styleName='button' type='button' onClick={this.focus}>点击获取焦点</button>

        </main>
        <footer>


        </footer>

      </div>
    );
  }
}
// 设置 this.props.title 的默认值， 如果不传递则显示'弹窗'
ComDialog.defaultProps = {
  title:'弹窗'
};
// prop验证
ComDialog.propTypes={
  title: PropTypes.string
}
export default CSSMudules(ComDialog,styles);