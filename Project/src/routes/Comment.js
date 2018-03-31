import React from 'react';
import "./Comment.less";
import {connect} from "react-redux";
import action from "../store/action";
import {queryComment} from '../api/nodeList';
import {withRouter} from 'react-router-dom';
import Comments from './Comment/Comments';

class Comment extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            param: {
                nodeId: 1,
                page: 1
            }
        }
    }

    componentDidMount() {
        let {match: {params: {nodeId}}} = this.props;
        let data = {
            nodeId,
            page: 1
        };
        this.setState({
            param: data
        });
    }

    // 把参数绑定到  构造函数的state里面

    render() {
        let{param} = this.state;
        return <Comments param={param}/>
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Comment))

