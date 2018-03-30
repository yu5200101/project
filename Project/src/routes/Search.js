import React from 'react';
import Nav from "../components/Nav";
import {NavLink} from 'react-router-dom'
import './Search.less'
import {connect} from 'react-redux';
import action from '../store/action/index';


class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            keyList: []
        }
    }

    async componentDidMount() {
        let {hotKey, getHotKey} = this.props;
        if (hotKey && hotKey.length === 0) {
            getHotKey();
        }
        this.setState({
            keyList: JSON.parse(localStorage.getItem('searchKey')) || []
        })
    }

    render() {
        let {hotKey} = this.props,
            {keyList} = this.state;
        return (
            <div className="search">
                <Nav/>
                <div className="return" onClick={ev => {
                    this.props.history.go(-1);
                }}>
                    取消
                </div>
                <div className="history">
                    <h2>历史记录</h2>
                    <b onClick={this.deleteHistory}><img src={require('../common/images/delete.png')} alt=""/></b>
                    <ul className="history-list">
                        {
                            keyList.map((item, index) => (
                                <NavLink to={`/all/${item}`} key={index}>
                                    <li>{item}</li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>

                <div className="hotSearch">
                    <h2>热门搜索</h2>
                    <ul className="hotSearch-list">
                        {
                            hotKey.map((item, index) => (
                                <NavLink to={`/all/${item}`} key={index}>
                                    <li>{item}</li>
                                </NavLink>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    deleteHistory = (ev) => {
        let ary = [];
        localStorage.setItem('searchKey', JSON.stringify(ary));
        this.setState({
            keyList: []
        })
    }
}

export default connect(state => ({...state.nodeList}), action.nodeList)(Search);
