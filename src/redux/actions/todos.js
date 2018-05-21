/**
 * action
 *  是行为的抽象，
 *  是普通的js对象
 *  一般由方法生成
 *  必须有一个type
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

// 添加todo
let todoId = 2001; //动态生成的id
export const todoAdd = (text) => {
  return {
    type: TODO_ADD,
    id: todoId++,
    text
  }
};

export const todoToggle = (id) => {
  return {
    type: TODO_TOGGLE,
    id
  }
};

// 所有的过滤器
export const todoFilters=()=>{
  return {
    TODO_SHOW_ALL:TODO_SHOW_ALL,
    TODO_SHOW_DELETED:TODO_SHOW_DELETED,
    TODO_SHOW_NODELETE:TODO_SHOW_NODELETE
  }
};

// 设置过滤器
export const todoSetFilter=(filter)=>{
 return{
   type:TODO_SET_FILTER,
   filter
 }
};


