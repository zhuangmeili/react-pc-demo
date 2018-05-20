/**
 *  是响应的抽象
 *  是纯方法
 *  传入旧状态 和 action
 *  返回新状态
 *
 * */
const todo=(state,action)=>{
    switch(action.type){
        case 'ADD_TODO':
            return {
                id:action.id,
                text:action.text,
                isDeleted:false
            };
        case 'TOGGLE_TODO':
            if (state.id !==action.id){
                return state;
            }else{
                // state
                return Object.assign({},state,{
                    isDeleted: !state.isDeleted
                });
            }

        default:
            return state
    }
};

//所有的列表
const todos=(state, action)=>{
    switch (action.type){
        // 添加一个item
        case 'ADD_TODO':
            return [...state, todo(undefined,action)];
        case 'TOGGLE_TODO':
            return state.map(item=>{
                todo(item,action)
            });
        default :
            return state;
    }
};


//过滤器的响应

