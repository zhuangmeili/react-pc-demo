import React from 'react';
import {connect } from 'react-redux';
import {increment,decrement} from '../redux/actions/counter'

const DoCounter=({dispatch})=>{
    return(
        <div>
            <p>点击了{count} 次</p>
            <button onClick={(e)=>{ dispatch(increment())}}> add count + </button>
            <br/><br/>
            <button onClick={(e)=>dispatch(decrement())}> minnus count - </button>
        </div>
    )
};

export default connect()(DoCounter);