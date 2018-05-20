import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ReduxPage.css';

// 组件引入
import Counter from '../../components/Counter/Counter';

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
                <Counter count={5} increment={increment}></Counter>
            </div>
        );
    }
}
const  mapStateToProps=(state)=>({
   count:state.count
});
const mapDispatchToProps=(dispatch)=>({
    increment:count=> dispatch(increment(count)),
    decrement:count=>dispatch(decrement(count))
});

export default connect(mapStateToProps,mapDispatchToProps)(ReduxPage);
//export default CSSMudules(ReduxPage,styles);