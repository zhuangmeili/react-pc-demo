import React, {Component} from 'react';
import CSSMudules from 'react-css-modules';
import styles from './TodoFooter.css';

import { todoFilters } from '../../redux/actions/todos';
// 组件引入
import FilterLink from '../../container/Todo/FilterLink';

class TodoFooter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName="">
        <h2>点击 过滤数据</h2>
        <FilterLink filter={ todoFilters.TODO_SHOW_ALL}>显示全部</FilterLink>
        <FilterLink filter={ todoFilters.TODO_SHOW_DELETED}>带有删除线</FilterLink>
        <FilterLink filter={ todoFilters.TODO_SHOW_NODELETE}>无删除线</FilterLink>
      </div>
    );
  }
}


//export default connect(mapStateToProps,mapDispatchToProps)(ReduxPage);
export default CSSMudules(TodoFooter, styles);