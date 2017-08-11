import React, { Component } from 'react';
import './HomePage.css';


//其他子组件
import HelloMessage from '../../components/HelloMessage/HelloMessage';
import StateTimer from '../../components/StateTimer/StateTimer';
import CSSModules from  'react-css-modules';
import styles from './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div styleName="">
        <HelloMessage/>
        <div styleName="divider"></div>

        <StateTimer/>

        <div styleName="passage">
          多行文本测试
          8月7日，微信IOS版6.5.13版本上线，“不常联系的朋友”功能正式上线，在设置-隐私里面即可查看小编看了自己的“不常联系朋友”竟然超过好友人数90%，吓得小编赶紧群发了一条“学IT技术到源码时代”增加自己的存在感（20分钟过后小编的的不常联系朋友果然少了很多，原因你们懂的）。早在之前的微信内测版本，众多网友使用了其功能之后，纷纷吐槽。
        </div>
      </div>
    );
  }
}

export default CSSModules(HomePage,styles);