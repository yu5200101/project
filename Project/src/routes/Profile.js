import React, {Component} from 'react'
import ReactDOM, {render} from 'react-dom'
import {withRouter, NavLink, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import './Profile.less'

import {isLogin, getProfileInfo} from '../api/profile'

import {getMyNote} from '../api/nodeList'

import Note from './Detail/Note'
import action from '../store/action/index'
import Footer from "../components/Footer";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            proData: {},
            childData: [],
            type: 'collect',
            id: 0
        }
    }

    async componentWillMount() {
        let id = window.localStorage.getItem('userId');
        let result = await getProfileInfo(id);
        this.setState({
            proData: result,
            id: id
        })
    };

    render() {
        let {proData, childData} = this.state;
        let id = localStorage.getItem('userId');
        return <div className="profile">
            <header className="heading">
                <div className="proHead">
                      <span onClick={() => {
                          this.props.history.push('/register')
                      }} className="iconfont icon-more"></span>
                    <span className="iconfont icon-zhuanfa"></span>
                </div>
                <div className="proInfo">
                    <div className="proImg">
                        <img src={proData.userImg} alt=""/>
                    </div>
                    <div className="proName">
                        <p>{proData.userName}</p>
                    </div>
                    <div className="proVip">
                        <p>成为黑卡会员 <span className="iconfont icon-go"></span></p>
                    </div>
                    <ul className="proFocus">
                        <li>
                            <p>{typeof  proData.follow == 'undefined' ? 0 : proData.follow.length}</p>
                            <p>关注</p>
                        </li>
                        <li>
                            <p>{typeof  proData.fens == 'undefined' ? 0 : proData.fens.length}</p>
                            <p>粉丝</p>
                        </li>
                        <li style={{
                            borderRight: 'none'
                        }}>
                            <p>0</p>
                            <p>获赞与收藏</p>
                        </li>
                    </ul>
                </div>
            </header>
            <section className="section">
                <div className="proEdit">
                    <NavLink to={`/profileInfo`}>编辑个人资料</NavLink>
                </div>
                <div className="proLocation">
                    <p><span className="iconfont icon-weizhi"></span>完善你的位置信息</p>
                    <p><span className="iconfont icon-dengji "></span>社区等级：升级规则 <span
                        className="iconfont icon-go"></span></p>
                </div>
                <div className="proDescribe">
                    <p>添加个人描述，让更多人认识你</p>
                </div>
                <ul onClick={async (e) => {
                    let type = e.target.getAttribute("type");
                    let {id} = this.state;

                    let result = await getMyNote(id, 1, type);

                    console.log(result);
                    if (type === 'node') {
                        e.className = 'active'
                    }
                    if (type === 'collect') {
                        e.className = 'active'
                    }

                    this.setState({
                        childData: result,
                        type: type
                    });
                }} className="proNote">
                    <li className="active" type="node">
                        我的笔记
                    </li>
                    <li type="collect">
                        收藏
                    </li>
                </ul>
                <div className="proNoteDetail">
                    {
                        this.state.type === 'node' ? <div>
                            {
                                childData && childData.length > 0 ? childData.map((item, index) => {
                                    return <Note key={index} data={item}/>
                                }) : ''
                            }
                        </div> : <div>
                            {
                                childData && childData.length > 0 ? childData.map((item, index) => {
                                    return <Note key={index} data={item}/>
                                }) : ''
                            }
                        </div>
                    }


                </div>
            </section>
            <div className="footer">
                <Footer  {...this.state} />
            </div>
        </div>
    }
}

export default connect(state => ({...state.profile}), action.profile)(Profile)

