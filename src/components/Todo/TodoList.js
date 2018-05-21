
import React, { Component } from 'react';
import CSSMudules from 'react-css-modules';
import  styles from './TodoList.css'
/*
* 注意 这个写法
* onClick={()=>todoToggle(item.id)}
*
* */
class TodoList extends Component {
  constructor(props){
    super(props);
  }
  render() {
    let {todos,todoToggle }=this.props;
    return (
      <div>
        <ul>
          {
            todos.map(item=>{
              return (
                <li styleName="item"
                    key={item.id}
                    onClick={()=>todoToggle(item.id)}
                    style={{textDecoration: item.isDeleted? 'line-through' : 'none'}}>
                  {item.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CSSMudules(TodoList,styles);