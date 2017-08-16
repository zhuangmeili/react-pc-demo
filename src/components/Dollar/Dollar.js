import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Dollar.css';


class Dollar extends Component {
  constructor(props){
    super(props);
  }
  handleChange=(event)=>{
    //将组件的值通过 props传递给父组件；
    this.props.dollarChange(event.target.value);
    console.log("onchange  child!");
  }

  render() {
    const money=this.props.money;
    // const yuan=this.props.yuan;
    // const text=this.props.type=='d'?"美元":"人民币";

    return (
      <div>
        <input styleName="formInp" type="text" value={money} onChange={this.handleChange}/>

      </div>
    )
  }
}

export default CSSModules(Dollar, styles);
