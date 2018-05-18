
import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ComColumns.css';

// 代码片段
class ComColumns extends Component {
  constructor(props){
    super(props);
    this.state={
    }

  }
  componentDidMount(){

  }
  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td> world </td>
      </React.Fragment>
    );
  }
}


export default CSSMudules(ComColumns,styles);
