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
            <div className="">
                <p>点击了{ count } 次</p>
                <button onClick={increment}> add count + </button>
                <br/><br/>
                <button onClick={decrement}> minnus count - </button>
            </div>
        );
    }
}
// Counter.propTypes={
//     count:PropTypes.number.isRequired
// }

export default CSSMudules(Counter,styles);
