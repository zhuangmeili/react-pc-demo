import React,{Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './HelloMessage.css'

class HelloMessage extends Component {

  render() {
    return (
      <div>
        <header styleName='helloHeader'> Hello this is my first conponent!</header>

        <main >
          main
        </main>
        <footer>footer</footer>

      </div>
    );
  }
}
export default CSSModules(HelloMessage, styles );