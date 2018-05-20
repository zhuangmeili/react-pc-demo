import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './Counter.css';


import PropTypes from 'prop-types';
//redux
class Counter extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        console.log(this.store);
    }
    render() {
        const { count}=this.props;
        return (
            <div className="">
                <p>点击了{count} 次</p>
            </div>
        );
    }
}
Counter.propTypes={
    count:PropTypes.number.isRequired
}

export default CSSMudules(Counter,styles);
