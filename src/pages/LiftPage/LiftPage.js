import React,{ Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './LiftPage.css';

//提升组件
class LiftPage extends Component{

  render(){
    return (
      <div>
        <header styleName="header">This is ListPage</header>
        <main>

        </main>
      </div>
    )
  }

}

export default CSSModules(LiftPage,styles);