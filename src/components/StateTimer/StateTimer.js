import React,{Component} from 'react';
import CSSModules from  'react-css-modules';
import styles from './StateTimer.css';

class StateTimer extends Component{
  render(){
    return (
      <div >
        <h2 styleName="helloHeader"> stateTimer</h2>
       </div>
    )
  }
}

export default CSSModules(StateTimer,styles);
