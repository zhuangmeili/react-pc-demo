import React,{ Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './LiftPage.css';

//提升组件
class LiftPage extends Component{
  constructor(props){
    super(props);
    this.state={
      clickCount:0
    }
  }
  addCountFn=()=>{
    // var clickCount=this.state.clickCount+1;
    // this.setState({
    //   clickCount:clickCount
    // })
    this.setState(function (state) {
      return {clickCount:state.clickCount+1}

    })
  }
  render(){
    let myStyle={fontSize:20, color:'#f00'}
    return (
      <div>
        <header style={myStyle}>This is ListPage</header>
        <main>
          clickCount: {this.state.clickCount};
          <br/>
          <br/>
          <button styleName="btnClick" onClick={this.addCountFn}>点击增加</button>

        </main>
      </div>
    )
  }

}

export default CSSModules(LiftPage,styles);