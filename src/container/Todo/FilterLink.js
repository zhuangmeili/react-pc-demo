import {connect} from 'react-redux';
import {todoSetFilter} from "../../redux/actions/todos";
import Link from "../../components/Todo/Link";
import {TODO_SHOW_DELETED} from "../../redux/actionTypes";

const mapStateToProps = (state,ownProps) => ({
  active: ownProps.filter === state.filter
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  onClick:()=> {
    console.log(1);
    dispatch(todoSetFilter('TODO_SHOW_DELETED') )
  }
});
export default connect(mapStateToProps,mapDispatchToProps)(Link);

