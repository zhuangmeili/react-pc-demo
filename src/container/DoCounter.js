import React from 'react';
import {connect } from 'react-redux';
import {increment,decrement} from '../redux/actions/counter'
import Counter from '../components/Counter/Counter';


const mapStateToProps = (state) => ({
    counter: state.counter
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})
export default connect(mapStateToProps,mapDispatchToProps)(Counter);