import React,{Component} from 'react';
import CSSModules from  'react-css-modules';
import styles from './Child.css';



class Child extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div >
        <h2 styleName="helloHeader"> </h2>

       </div>
    )
  }
}

export default CSSModules(Child,styles);
