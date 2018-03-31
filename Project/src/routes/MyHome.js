import React,{Component} from 'react'
import {NavLink} from "react-router-dom"
import './MyHome.less';
export default class MyHome extends Component{
    constructor(){
        super()
    }

    render(){
        return <div className="Q-container">
           <div className="Q-title">
                <h1>宝书</h1>
               <h3>标记我的生活</h3>
           </div>
            <div className="Q-lore">
                <NavLink to="/login">登录</NavLink>
                <NavLink to="/register">注册</NavLink>
            </div>
            <div className="Q-wechatLogin">
                <div><span className="iconfont icon-weixin"></span>微信登录</div>
            </div>
            <ul className="Q-footer">
                <li>
                    <span className="iconfont icon-weibo"></span>
                    微博
                </li>
                <li>
                    <span className="iconfont icon-msnui-logo-qq"></span>
                    QQ
                </li>
                <li>
                    <span className="iconfont icon-facebook"></span>
                    facebook
                </li>
            </ul>
        </div>
    }
}

