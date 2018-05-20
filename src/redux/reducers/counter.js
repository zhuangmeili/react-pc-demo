/*
* reducer 响应action 并发送到store
* 就是一个纯函数
* (previousState, action) => newState
*
* */
import { INCREMENT, DECREMENT } from '../actionTypes'
const initialState={
    count:0
};
const counterReducer=(state=initialState,action)=>{
  switch (action.type){
      case INCREMENT:
          console.log(state.count);
        return Object.assign({},state,{count:state.count+1});
      case DECREMENT:
          console.log(state.count);
          return Object.assign({},state,{count:state.count-1});
      default:
          return state;
  }
};
export default counterReducer;