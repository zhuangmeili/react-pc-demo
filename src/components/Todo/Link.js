
import React, {Component} from 'react';
import CSSMudules from 'react-css-modules';
import styles from './TodoFooter.css';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {active,children,onClick}=this.props;
    return (
      <button onClick={onClick} disabled={active} style={{marginRight:'10px'}}>{children}</button>
    );
  }
}
export default CSSMudules(Link, styles);