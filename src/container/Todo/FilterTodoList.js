import {connect} from 'react-redux';
import TodoList from '../../components/Todo/TodoList';

//actions 引入
import {todoFilters,todoToggle} from "../../redux/actions/todos";


const getFilterTodos=(todos,filter)=>{
  switch (filter){
    case todoFilters.TODO_SHOW_ALL:
      return todos;
    case todoFilters.TODO_SHOW_DELETED:
      return todos.filter(item=>item.isDeleted);
    case todoFilters.TODO_SHOW_NODELETE:
      return todos.filter(item=>!item.isDeleted);
    default :
      return todos
  }
};
const mapStateToProps = (state) => ({
  // 这里的 state.xxx(不同的reducers)
  todos: getFilterTodos(state.todos.todos,state.todos.filter)
});

const mapDispatchToProps = (dispatch) => ({
  todoToggle:(id)=> dispatch(todoToggle(id))
});
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);