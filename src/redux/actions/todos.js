/**
 * action
 *  是行为的抽象，
 *  是普通的js对象
 *  一般由方法生成
 *  必须有一个type
 *
 * */

// 添加todo
let todoId=0; //动态生成的id
const addTodo=(text)=>{
    return {
        type:'ADD_TODO',
        id:todoId,
        text
    }
};

//过滤数据
const setVisibility=(filter)=>{
    return {
        type:'SET_VISIBILITY',
        filter
    }
};

//
const  toggleTodo=(id)=>{
    return{
        type:'TOGGLE_TODO',
        id
    }
};


export { addTodo,setVisibility,toggleTodo};

