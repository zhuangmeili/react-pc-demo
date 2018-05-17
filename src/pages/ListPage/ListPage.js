import React,{ Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './ListPage.css';



class ListPage extends Component{

  render(){
    const number=["item1","item2","item3","item4"];
    const listItems=number.map((item,index)=>
      <li key={index} styleName="listItem">{item}</li>
    );
    return (
      <div>
        <header styleName="header">This is ListPage</header>
        <main>
          <ul>
            {listItems }
          </ul>
        </main>
      </div>
    )
  }

}

export default CSSModules(ListPage,styles);