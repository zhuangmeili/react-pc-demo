import React, {Component} from 'react';
import CSSMudules from 'react-css-modules';
import styles from './ReduxPage.css';

// 组件引入
import DoCounter from '../../container/DoCounter';
import FilterTodoList from '../../container/Todo/FilterTodoList';
import TodoFooter from '../../components/Todo/TodoFooter';
class ReduxPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  render() {
    return (
      <div className="">
        <section styleName="section">
          <h2 styleName="header"> counter 组件 </h2>
          <DoCounter></DoCounter>
        </section>

        <section styleName="section">
          <h2 styleName="header"> todolist 组件</h2>
          <FilterTodoList></FilterTodoList>
          {/*<TodoFooter></TodoFooter>*/}
        </section>
      </div>
    );
  }
}


//export default connect(mapStateToProps,mapDispatchToProps)(ReduxPage);
export default CSSMudules(ReduxPage, styles);