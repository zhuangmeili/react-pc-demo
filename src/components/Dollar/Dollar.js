import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './Dollar.css';


class Dollar extends Component {
  constructor(props){
    super(props);
  }
  handleChange=(event)=>{
    //将组件的值通过 props传递给父组件；dollarChange ,
    this.props.dollarChange(event.target.value);
    console.log("onchange  child!");
  }

  render() {
    //子组件 接收属性money
    const money=this.props.money;
    return (
      <div>
        <input styleName="formInp" type="text" value={money} onChange={this.handleChange}/>

      </div>
    )
  }
  componentDidMount(){

  }

}

export default CSSModules(Dollar, styles);
