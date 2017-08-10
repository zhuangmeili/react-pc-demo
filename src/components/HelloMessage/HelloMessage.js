import React,{Component} from 'react';
import './HelloMessage.css'
class HelloMessage extends Component {
  render() {
    return (
      <div>
        <header className="helloHeader"> Hello this is my first conponent!</header>

        <main >
          main
        </main>
        <footer>footer</footer>

      </div>
    );
  }
}

export default  HelloMessage;