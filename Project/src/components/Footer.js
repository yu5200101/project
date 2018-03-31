import React from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.less';
import '../common/css/style.css';

export default class Footer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <footer className="footerBox">
                <ul>
                    <li>
                        <NavLink exact to="/home">
                            <i className="icon-home3"></i>
                            首页
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/classify">
                            <i className="icon-menu"></i>
                            分类
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/add">
                            <i className="icon-plus"></i>
                            添加
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/message">
                            <i className="icon-bubbles"></i>
                            消息
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/profile">
                            <i className="icon-user"></i>
                            我
                        </NavLink>
                    </li>
                </ul>
            </footer>
    }
}
