import React,{Component} from 'react';
import CSSModules from  'react-css-modules';
import styles from './StateTimer.css';



class StateTimer extends Component{
  constructor(props){
    //super用在类的继承中，可以调用父类的构造器
    //super做的事情就是生成一个this；
    super(props);
    this.state={date:new Date(),counter:0};

  }

  chageTime(){
    this.setState({ date:new Date() });
    this.setState(function(prevState){
      return {
        counter:prevState.counter+5
      }
    });
  }
  //DOM生成之后
  componentDidMount(){
    this.timerId=setInterval(()=>{
      this.chageTime();
    },1000);
  }

  componentWillUnmount(){
    //销毁timer
    clearInterval(this.timerId);
  }

  render(){
    return (
      <div >
        <h2 styleName="helloHeader"> stateTimer</h2>
        <br/>
        {/*当前时间{this.props.date.toLocaleTimeString()}*/}
        { this.state.date.toLocaleTimeString()}

        <br/>
        counter {this.state.counter}
       </div>
    )
  }
}

export default CSSModules(StateTimer,styles);
