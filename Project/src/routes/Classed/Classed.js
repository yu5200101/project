import React from 'react';
import './Classed.less';
import './public';
import Footer from "../../components/Footer";
import {NavLink, withRouter} from 'react-router-dom'
import LoadClass from '../../components/LoadClass';
import {connect} from "react-redux";
import action from "../../store/action";

class Classed extends React.Component {
    constructor() {
        super();
        this.state = {
            classData: [],
            param: {
                type: 'food',
                page: 1
            }
        }
    }


    componentDidMount() {
        let {param} = this.state;
        let {classData, getClassNode} = this.props;
        if (classData && classData.length === 0) {
            getClassNode(param);
        }
    }


    render() {
        let {classData} = this.props;
        let {param: {type}} = this.state;
        return (<div className="discover">
            <div className="nav">
                <ul onClick={this.handClick}>
                    <li type="food" className="active">美食</li>
                    <li type="fashion" className="active">时尚</li>
                    <li type="beauty" className="active">美妆</li>
                    <li type="exercise" className="active">运动</li>
                    <li type="audioVideo" className="active">影音</li>
                    <li type="travel" className="active">旅行</li>
                    <li type="home" className="active">居家</li>
                </ul>
            </div>
            <div className="container">
                <ul>
                    {
                        classData && classData.length > 0 ? classData.map((item, index) => (
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
                        )) : ''
                    }
                </ul>
                <div className="loadMore">
                    <LoadClass type={type}/>
                </div>
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
        [...childrenList].forEach((item) => {
            item.className = '';
        });
        tar.className = 'active';
        let data = {
            type: type,
            page: 1
        };
        this.setState({
            param: data
        }, function () {
            this.props.getClassNode(this.state.param);
        });

    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Classed))