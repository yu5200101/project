import React from 'react';
import './Classed.less';
import './public';
import Footer from "../../components/Footer";
import {queryNodeListClass} from '../../api/nodeList';
import {NavLink} from 'react-router-dom'

export default class Classed extends React.Component {
    constructor() {
        super();
        this.state = {
            classData: [],
            param: {
                type: 'food',
                page: 1
            },
            step: 0,
            startX: 0,
            changeX: 0
        }
    }

    async componentDidMount() {
        let result = await queryNodeListClass(this.state.param);
        this.setState({
            classData: result
        });
    }

    render() {
        let {classData, param: {type}} = this.state;
        return (<div className="discover">
            <div className="nav">
                <ul onClick={this.handClick}>
                    <li type="food" className="active">美食</li>
                    <li type="fashion">时尚</li>
                    <li type="beauty">美妆</li>
                    <li type="exercise">运动</li>
                    <li type="audioVideo">影音</li>
                    <li type="travel">旅行</li>
                    <li type="home">居家</li>
                </ul>
            </div>
            <div className="container">
                <ul>
                    {
                        classData.map((item, index) => (
                            <NavLink to={`detail/${item['nodeId']}`} key={index}>
                            <li>
                                <img src={item['nodeImg']} alt=""/>
                                <span>{item['title']}</span>
                                <div className="tab">
                                    <img src={item['userImg']} alt=""/>
                                    <p>{item['userName']}</p>
                                    <div className="tabRight">
                                        <img src={require('../../common/images/shoucang.png')} alt=""/>
                                        <span>{item['likes'].length}</span>
                                    </div>
                                </div>
                            </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>)
    }

    handClick = (ev) => {
        let tar = ev.target;
        let type = tar.getAttribute('type');
        let childrenList = tar.parentNode.children;
        for (let i = 0; i < childrenList.length; i++) {
            let itemType = childrenList[i].getAttribute('type');
            childrenList[i].className = this.state.param.type === itemType ? 'active' : '';
        }
        let data = {
            type: type,
            page: 1
        };
        this.setState({
            param: data
        });
        queryNodeListClass(this.state.param).then(result => {
            this.setState({
                classData: result
            });
        });
    }
}