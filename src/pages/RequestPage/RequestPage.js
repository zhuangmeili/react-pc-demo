import React,{ Component} from 'react';
import axios from  'axios';
import CSSModules from 'react-css-modules';
import styles from './RequestPage.css';
class RequestPage extends Component{
  constructor(props){
    super(props);
    this.state={userMsg:null};
  }
  getBookData(){
    axios.request({
      url:'https://api.github.com/users/zhuangmeili',
      method:'get',
      responseType: 'json',
    }).then(res=>{
      let userMsg=res.data;
      this.setState({
        userMsg:userMsg
      });
    }).catch(error=>{
      console.log("error");
    })

  }
  //获得数据 在 DidMount中获取
  componentDidMount(){
    this.getBookData();
  }
  componentWillUnmount(){

  }
  render(){
    var userMsg=(this.state.userMsg) ;
    console.log(userMsg);
    return (
      <div>
        <header >我是RequestPage</header>
        {
          !!userMsg?(
            <div>
              <dl styleName="line">
                <dt styleName="title">名字</dt>
                <dd>{userMsg.name}</dd>
              </dl>
              <dl styleName="line">
                <dt styleName="title">头像</dt>
                <dd>
                  <img styleName="avator" src={userMsg.avatar_url} alt=""/>
                </dd>
              </dl>
              <dl styleName="line">
                <dt styleName="title">创建时间</dt>
                <dd>{userMsg.created_at}</dd>
              </dl>
              <dl styleName="line">
                <dt styleName="title">最近更新时间</dt>
                <dd>{userMsg.updated_at}</dd>
              </dl>

            </div>
          ):''
        }

      </div>
    )


  }

}

export default CSSModules(RequestPage,styles);