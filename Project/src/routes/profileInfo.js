import React,{Component} from 'react'

import {connect} from 'react-redux'

import action from '../store/action/index'

import './profileInfo.less'

import {getProfileInfo} from '../api/profile'

 class ProfileInfo extends Component{

    constructor(){
        super();
        this.state={
            data:{}
        }
    }

    async componentWillMount(){

        let id=window.localStorage.getItem('userId');
        let result=await getProfileInfo(id);
        this.setState({
            data:result
        });
        console.log(this.props);
    }

    render(){
        let {data}=this.state;
        return(<div className="Q-proInfo">
            <header className="Q-heading">
                   <span onClick={()=>{
                       this.props.history.goBack(-1)
                   }}>&lt;</span>
                    个人资料
               </header>
            <section className="Q-main">
                <h2>个人资料</h2>
                <ul>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>修改名字</p>
                            <p>{data.userName} </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>小红书ID</p>
                            <p>{data.id} </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>实名认证</p>
                            <p style={{
                                fontSize: ".3rem",
                                color: "#d2d2d2"
                            }}>未认证,认证信息尽自己可见 </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>性别</p>
                            <p>{data.sex == 0 ? "女" : "男"} </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>常驻地</p>
                            <p>完善你的信息 </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>生日</p>
                            <p>{data.birth}</p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p>个性签名</p>
                            <p>未填写 </p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                    <li style={{
                        height: ".7rem",
                        lineHeight: ".7rem",
                        fontSize: ".28rem",
                        background: "#f6f8fa",
                        paddingLeft: ".3rem",
                        color: "#9f9f9f",
                        letterSpacing: ".1rem",
                        borderBottom: ".01rem solid #e9e9ea"
                    }}>
                        红薯等级
                    </li>
                    <li className="Q-infoOther">
                        <div className="Q-infoLeft">
                            <p style={{
                                color: "#222222"
                            }}>薯北鼻</p>
                            <p></p>
                        </div>
                        <span className="iconfont icon-go"></span>
                    </li>
                </ul>
            </section>
            <footer className="Q-footer">
                <h2>更多信息(仅自己可见,用于优化后的结果)</h2>
            </footer>
        </div>)
    }

}

export default connect(state=>({...state.profile}),action.profile)(ProfileInfo)
