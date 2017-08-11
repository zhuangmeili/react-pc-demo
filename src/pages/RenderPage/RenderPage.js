import React,{ Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './RenderPage.css';
class RenderPage extends Component{
  render(){
    return (
      <div>
        <header styleName="header">我是RenderPage</header>

      </div>
    )

  }

}

export default CSSModules(RenderPage,styles);