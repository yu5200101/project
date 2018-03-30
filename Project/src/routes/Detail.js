import React from 'react';
import "./Detail.less";
import {connect} from 'react-redux';
import action from '../store/action/index';
import {queryNodeListInfo, queryComment, isFollow, isCollect, isLike} from '../api/nodeList';
import {queryUserInfo} from '../api/profile';
import {withRouter} from 'react-router-dom';
import Node from './Detail/Node';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            nodeData: {},
            commentData: [],
            userInfo: {},
            param: {
                nodeId: 1,
                page: 1
            },
            follow: {
                id: 0,
                fId: 0
            },
            icons: {
                id: 0,
                nodeId: 1,
            },
            isLike: false,
            isCollect: false,
            isFollow: false,
            Id: JSON.parse(localStorage.getItem('userId'))[0],
        }
    }

    async componentDidMount() {
        let {Id} = this.state;
        let {match: {params: {nodeId}}} = this.props;
        let result = await queryNodeListInfo(nodeId);
        this.setState({
            nodeData: result
        }, function () {
            let data = {
                id: Id,
                fId: this.state.nodeData['id']
            };
            this.setState({
                follow: data
            }, async function () {
                let result = await isFollow(this.state.follow);
                this.setState({
                    isFollow: result
                });
            });
        });
        let data = {
            nodeId,
            page: 1
        };
        this.setState({
            param: data
        }, async function () {
            let commentResult = await queryComment(this.state.param);
            this.setState({
                commentData: commentResult
            });
        });
        let userInfo = await queryUserInfo(Id);
        this.setState({userInfo});

        let icons= {
            nodeId,
            id: Id,
        };
        this.setState({
            icons,
        }, async function () {
            let resultLike = await isLike(this.state.icons);
            this.setState({
                isLike: resultLike
            });
            isCollect(this.state.icons).then(result=>{
                this.setState({
                    isCollect: result
                });
            });
        });
    }

    render() {
        let {nodeData, commentData, isFollow, userInfo, isCollect, isLike} = this.state;
        return <Node nodeData={nodeData} commentData={commentData} isFollow={isFollow} userInfo={userInfo}
                     isCollect={isCollect} isLike={isLike}/>
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Detail))

