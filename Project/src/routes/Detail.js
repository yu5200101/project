import React from 'react';
import "./Detail.less";
import {connect} from 'react-redux';
import action from '../store/action/index';
import {queryNodeListInfo, queryComment,isFollow,isLike,isCollect} from '../api/nodeList';
import {getProfileInfo} from '../api/profile';
import {withRouter} from 'react-router-dom';
import Node from './Detail/Node';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            nodeData: {},
            commentDatas: [],
            userInfo: {},
            param: {
                nodeId: 1,
                page: 1
            },
            follow: {
                id: 1,
                fId: 2
            },
            icons: {
                id: 1,
                nodeId: 2,
            },
            isFollow:false,
            isLike:false,
            isCollect:false,
            Id: JSON.parse(localStorage.getItem('userId')),
        }
    }

    async componentDidMount() {
        let {Id} = this.state;
        let {match: {params: {nodeId}}} = this.props;
        let icons= {
            id: Id,
            nodeId
        };
        this.setState({icons},async function () {
            let resultLike = await isLike(this.state.icons);
            this.setState({
                isLike: resultLike
            });
            let resultCollect = await isCollect(this.state.icons);
            this.setState({
                isCollect: resultCollect
            });
        });
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
            },async function () {
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
                commentDatas: commentResult
            });
        });
        let userInfo = await getProfileInfo(Id);
        this.setState({userInfo});


    }

    render() {
        let {nodeData, commentDatas, isFollow, follow,icons,userInfo,isLike,isCollect} = this.state;
        return <Node nodeData={nodeData} commentDatas={commentDatas}  userInfo={userInfo} isFollow={isFollow} isLike={isLike} isCollect={isCollect} follow={follow} icons={icons} />
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Detail))

