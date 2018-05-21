/**
 *  是响应的抽象
 *  是纯方法
 *  传入旧状态 和 action
 *  返回新状态
 *
 * */
import {
  TODO_ADD,
  TODO_TOGGLE,
  TODO_SET_FILTER,
  TODO_SHOW_ALL,
  TODO_SHOW_DELETED,
  TODO_SHOW_NODELETE
} from '../actionTypes';

const initialState={
  todos:[
    {id:1001,isDeleted:false, text:'item1'},
    {id:1002,isDeleted:true, text:'item2'},
    {id:1003,isDeleted:false, text:'item3'},
    {id:1004,isDeleted:true, text:'item4'},
    {id:1005,isDeleted:false, text:'item5'},
    ],
  filter:TODO_SHOW_ALL
};

//所有的列表
const todos = (state=initialState, action) => {
  switch (action.type) {
    case 'TODO_TOGGLE':
      let todos=state.todos.map(item=>{
        return item.id === action.id ? {...item,isDeleted:!item.isDeleted} : item;
      });
      return Object.assign({},state,{todos:todos});
    default :
      return state;
  }
};

export default todos;
//过滤器的响应

