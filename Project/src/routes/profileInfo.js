import React, {Component} from 'react'

import {connect} from 'react-redux'

import action from '../store/action/index'

import './profileInfo.less'

import {getProfileInfo, editUserInfo} from '../api/profile'

class ProfileInfo extends Component {

    constructor() {
        super();
        this.state = {
            id: localStorage.getItem('userId'),
            data: {},
            param: {
                id: localStorage.getItem('userId'),
                userName: '',
                birth: '',
                sex: 0,
                bio: '',
                tel: ''
            },
            tel: '',
            name: '',
            birth: '',
            sex: 0,
            bio: ''
        }
    }

    async componentWillMount() {
        let {id} = this.state;
        let result = await getProfileInfo(id);
        this.setState({
            data: result
        });
    }

    render() {
        let {data, name, birth, sex, bio, tel} = this.state;
        return (<div>
            <div className="Q-proInfo">
                <header className="Q-heading">
            <span onClick={(ev) => {
                this.props.history.go(-1);
            }}>&lt;</span>
                    <h3>个人资料</h3>
                </header>
            </div>
            <div className="L-nav">
                <span>个人资料</span>
            </div>
            <div className="L-con">
                <ul>
                    <li>
                        <p>修改名字</p>
                        <input type="text" placeholder={data['userName']}
                               onChange={this.handName} value={name}/>
                        <span>&gt;</span>
                    </li>
                    <li>
                        <p>宝书ID</p>
                        <div className="input">
                            <span>{data.id}</span>
                        </div>
                        <span>&gt;</span>
                    </li>
                    <li>
                        <p>电话号码</p>
                        <input type="text" placeholder={data['tel']} onChange={this.handTel} value={tel}/>
                        <span>&gt;</span>
                    </li>
                    <li>
                        <p>性别</p>
                        <input type="text" placeholder="女" onChange={this.handSex} value={sex ? '男' : '女'}/>
                        <span>&gt;</span>
                    </li>
                    <li>
                        <p>生日</p>
                        <input type="text" placeholder={data['birth']}
                               onChange={this.handBirth} value={birth}/>
                        <span>&gt;</span>
                    </li>
                    <li>
                        <p>个性签名</p>
                        <input type="text" placeholder={data['bio']}
                               onChange={this.handBio} value={bio}/>
                        <span>&gt;</span>
                    </li>
                </ul>
                <div className="L-nav">
                    <span>红薯等级</span>
                </div>
                <ul>
                    <li>
                        <p>薯北鼻</p>
                        <span>&gt;</span>
                    </li>
                </ul>
                <div className="L-nav">
                    <span>更多信息（仅自己可见，用于优化你的推荐结果）</span>
                </div>
                <div className="nav" onClick={this.confirm}>确认</div>
            </div>
        </div>)
    }

    confirm = (ev) => {
        let {id, name, birth, sex, bio, tel} = this.state;
        let data = {
            id,
            userName: name,
            birth,
            sex: sex === '男' ? 1 : 0,
            bio,
            tel,
        };
        this.setState({param: data}, function () {
            editUserInfo(this.state.param);
        });
        setTimeout(() => {
            this.props.history.push('/profile');
        }, 500);
    };
    handName = (ev) => {
        this.setState({
            name: ev.target.value
        });
    };
    handBio = (ev) => {
        this.setState({
            bio: ev.target.value
        });
    };
    handBirth = (ev) => {
        this.setState({
            birth: ev.target.value
        });
    };
    handSex = (ev) => {
        this.setState({
            sex: ev.target.value
        });
    };
    handTel = (ev) => {
        this.setState({
            tel: ev.target.value
        });
    };
}

export default connect(state => ({...state.profile}), action.profile)(ProfileInfo)
