import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ComDialog.css';

class ComDialog extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div styleName="dialog">
        <header styleName='header'>{ this.props.title}</header>
        <main styleName="content">
          <p>{this.props.message}</p>
          {this.props.children}
        </main>
        <footer>

        </footer>

      </div>
    );
  }
}

export default CSSMudules(ComDialog,styles);