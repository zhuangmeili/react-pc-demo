import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './EventPage.css';

import './EventPage.css';
class EventPage extends Component {
  constructor(props){
    super(props);
    this.state={isShow:true};
    //this.toggleEvent = this.toggleEvent.bind(this);
  }
  toggleEvent=()=>{
    this.setState(function (prevState) {
      return{
        isShow:!prevState.isShow
      }
    })
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="">
        <header styleName="header">This is eventPage</header>
        <main>
          <button type="button" styleName="btnDefault" onClick={this.toggleEvent}> click me</button>
          <br/>
          {this.state.isShow?(
            <div styleName="box">显示盒子</div>
          ):'隐藏盒子'}
        </main>

      </div>
    );
  }
}

export default CSSMudules(EventPage,styles);