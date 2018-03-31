import React, {Component} from 'react'
import {Navlink} from 'react-router-dom'
import {connect} from 'react-redux'
import './Login.less'

import action from '../store/action/index'

import {login} from '../api/profile'

class Login extends Component {
    constructor() {
        super();

    }

    render() {

        let {getProfile} = this.props;
        return <div className="Q-wrapper">
            <header className="Q-heading">
           <span onClick={() => {
               this.props.history.goBack(-1);
           }}>&lt;</span>
            </header>
            <section className="Q-main">
                <div className="Q-telInput">
                    <form className="Q-form-horizontal">
                        <div className="form-group">
                            <div className="col-sm-8">
                                <input ref={'usertel'} type="text" className="form-control" placeholder="请输入电话号码"/>
                            </div>

                        </div>
                        <div className="form-group">
                            <div className="col-sm-8">
                                <input ref={'pass'} type="password" className="form-control" placeholder="请输入密码"/>
                            </div>
                        </div>
                    </form>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button onClick={async () => {
                                let {usertel, pass} = this.refs;

                                let id = await login(usertel.value, pass.value);

                                if (id == '用户名密码错误') {
                                    alert("用户名密码错误");
                                    return;
                                }
                                localStorage.setItem("userId", id);
                                this.props.history.push(`/home`);

                            }} className="btn btn-default">Sign in
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="Q-footer">
                <div className="Q-thirdLogin">
                    <span></span>
                    第三方登录平台
                    <span></span>
                </div>
                <ul className="Q-thirdDetail">
                    <li>
                        <span className="icon-heart"></span>
                        微信
                    </li>
                    <li>
                        <span className="icon-heart"></span>
                        QQ
                    </li>
                    <li>
                        <span className="icon-heart"></span>
                        微博
                    </li>
                    <li>
                        <span className="icon-heart"></span>
                        facebook
                    </li>
                </ul>
            </footer>
        </div>
    }
}

export default connect(state => ({...state.profile}), action.profile)(Login)

