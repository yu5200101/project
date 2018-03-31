import React from 'react';
import "./Detail.less";
import {connect} from 'react-redux';
import action from '../store/action/index';
import {queryNodeListInfo, queryComment} from '../api/nodeList';
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
        this.setState({icons});
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
        let {nodeData, commentDatas, follow, userInfo,icons} = this.state;
        return <Node nodeData={nodeData} commentDatas={commentDatas} follow={follow} userInfo={userInfo}
                     icons={icons} />
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Detail))

