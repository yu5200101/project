import React,{Component} from 'react'
import ReactDOM,{render} from 'react-dom'
import {withRouter} from 'react-router-dom'

import '../common/css/bootstrap.css'
import "./Register.less"

import {connect} from 'react-redux'
import action from '../store/action/index'


import {login} from '../api/profile'
import {register,getCheckID} from '../api/profile'

class  Register extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }

    render(){

        return (<div className="wrapper">
            <header className="heading">
                <span onClick={()=>{
                    this.props.history.goBack(-1);
                }}>&lt;</span>
            </header>
            <section className="main">

           <div className="telInput">
               <form className="form-horizontal">
                   <div className="form-group">
                       <div className="col-sm-8">
                           <input ref={'usertel'} type="text" className="form-control"  placeholder="请输入手机号"/>
                       </div>

                   </div>
                   <div className="form-group">
                       <div className="col-sm-8">
                           <input ref={'pass'} type="password" className="form-control"   placeholder="请输入密码"/>
                       </div>
                   </div>
                   <div className="form-group">
                       <div className="col-sm-4">
                           <input ref={'checkID'} type="text" className="form-control"   placeholder="请输入验证码"/>
                           <button onClick={async ()=>{
                             let {usertel,pass,checkID,register}=this.refs;

                               let result= await getCheckID(usertel.value,pass.value);
                               usertel.value=result.tel;
                               pass.value=result.pass;
                               checkID.value=result.code;
                               register.style.background="blue"
                           }}>点击发送验证码</button>
                       </div>
                   </div>
               </form>
               <div className="form-group">
                   <div className="col-sm-offset-2 col-sm-10">
                       <button ref={'register'}      onClick={ ()=>{
                           this.props.history.push('/login')
                       }}  className="btn btn-default">Sign up</button>
                   </div>
               </div>
            </div>
                <p>注册代表你已同意 <span style={{color:'#5c93e1'}}>注册协议</span> 和 <span style={{color:'#5c93e1'}}>隐私政策</span></p>
            </section>
            <footer className="footer">
                <div className="thirdLogin">
                    <span></span>
                    第三方登录平台
                    <span></span>
                </div>
                <ul className="thirdDetail">
                    <li>
                        <span className="iconfont icon-weixin"></span>
                        微信
                    </li>
                    <li>
                        <span className="iconfont icon-msnui-logo-qq"></span>
                        QQ
                    </li>
                    <li>
                        <span  className="iconfont icon-weibo" ></span>
                        微博
                    </li>
                    <li>
                        <span  className="iconfont icon-facebook"></span>
                        facebook
                    </li>
                </ul>
            </footer>
        </div>)
    }
}
export default connect(state=>({...state.profile}),action.profile)(Register)
