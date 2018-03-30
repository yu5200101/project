import React from 'react';
import './Nav.less'
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import action from '../store/action/index';

class Nav extends React.Component {
    constructor() {
        super();

    }

    handKey = (ev) => {
        let code = ev.keyCode;
        if (code === 13) {
            let keyList = JSON.parse(localStorage.getItem('searchKey')),
                key = ev.target.value.trim();
            let isExit = keyList.find(item => item === key);
            !isExit ? keyList.push(key) : null;
            localStorage.setItem('searchKey', JSON.stringify(keyList));
            this.props.history.push(`/all/${key}`);
        }
    };

    render() {
        return (
                <header className="header">
                    <a href="#/search">
                        <img src={require('../common/images/search.png')} alt=""/>
                        <input type="text"
                               className="searchInfo"
                               placeholder='大家都在搜"美妆爆款99选3"'
                               onKeyUp={this.handKey}
                        />
                    </a>
                </header>
            )


    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Nav));

