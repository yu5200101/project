import React from 'react';
import {withRouter,NavLink} from 'react-router-dom';
import './Footer.less'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <footer className="footerBox">
            <ul>
                <li>
                    <NavLink exact to="/home">
                            <img src={require('../common/images/shouye.png')} alt=""/>
                        首页
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/classify">
                            <img src={require('../common/images/shangcheng.png')} alt=""/>
                        分类
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/add">
                        <img src={require('../common/images/add.png')} alt=""/>
                        添加
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/message">
                            <img src={require('../common/images/xiaoxi2.png')} alt=""/>
                      消息
                    </NavLink>
                </li>

                <li>
                    <NavLink to="/profile">
                            <img src={require('../common/images/mine.png')} alt=""/>
                        我
                    </NavLink>
                </li>
            </ul>
        </footer>
    }
}
