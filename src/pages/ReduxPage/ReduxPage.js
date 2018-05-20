import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ReduxPage.css';

// 组件引入
import DoCounter from '../../container/DoCounter';

// redux
import {connect} from 'react-redux';
import {increment,decrement} from '../../redux/actions/counter';

class ReduxPage extends Component {
    constructor(props){
        super(props);
        this.state={

        }

    }
    render() {

        return (
            <div className="">
                <h2> counter 组件 </h2>
                <DoCounter></DoCounter>
            </div>
        );
    }
}


//export default connect(mapStateToProps,mapDispatchToProps)(ReduxPage);
export default CSSMudules(ReduxPage,styles);