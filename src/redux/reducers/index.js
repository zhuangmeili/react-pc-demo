/**
 *
 *
 * */
import {combineReducers} from 'redux';

//import reducers
import counter from './counter';
import todos from './todos';
import todoFilter from './todoFilter'

export default combineReducers({
    counter,
    todos,
    todoFilter
})