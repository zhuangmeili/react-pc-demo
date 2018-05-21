import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './Counter.css';


import PropTypes from 'prop-types';
import {decrement, increment} from "../../redux/actions/counter";
//redux
class Counter extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const { counter,increment,decrement}=this.props;
        console.log(counter);
        let count=counter.count;
        return (
            <div styleName="couterWrap">
                <p styleName="header">点击了 <span styleName="red">{ count } </span>  次</p>
                <button styleName="button" onClick={increment}> add count + </button>
                <button styleName="button" onClick={decrement}> minnus count - </button>
            </div>
        );
    }
}
// Counter.propTypes={
//     count:PropTypes.number.isRequired
// }

export default CSSMudules(Counter,styles);
