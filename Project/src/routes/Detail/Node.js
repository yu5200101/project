import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import action from "../../store/action/index";
import utils from '../../common/js/utils';
import {addLike, addCollect, addComment, addFollow} from '../../api/nodeList';
import '../../common/css/style.css'

class Node extends React.Component {

    static propTypes = {
        nodeData: PropTypes.object.isRequired,
        commentData: PropTypes.array.isRequired,
        isFollow: PropTypes.bool.isRequired,
        isCollect: PropTypes.bool.isRequired,
        isLike: PropTypes.bool.isRequired,
        userInfo: PropTypes.object.isRequired

    };

    constructor(props) {
        super(props);
        this.state = {
            idParam: {
                id: 0,
                nodeId: 0
            },
            follow: {
                id: 0,
                fId: 0
            },
            Id: JSON.parse(localStorage.getItem('userId'))[0],
            comment: '',
            commentParam: {
                id: 0,
                nodeId: 0,
                text: '',
                time: '',
            },
            isFollow:false,
            isLike:false,
            isCollect:false
        }
    }

    render() {
        let {
            nodeData: {
                id = 1,
                userName = 'yuan',
                userImg = 'http://tvax4.sinaimg.cn/crop.0.2.507.507.180/8e29c1baly8fdx1zfctlhj20e30e8dfw.jpg',
                nodeImg = 'http://ci.xiaohongshu.com/561b03f4-1595-46c6-85e9-c895d688b5b1@r_750w_750h_ss1.jpg',
                nodeId = 1,
                title = '和武汉有关的春天',
                content = '樱花盛开的 纷飞的三月,没有空去京都看樱花 那就去武汉吧,事前做了攻略 说东湖的樱花更好看 可是东湖离住的地方有点远就罢了 便去了武大,樱花大道果然名不虚传 像走在动漫里一样 就是人超级超级多 拍照还是得早点去,我去的时候是阴天 光线不太好所以照片也不是很理想 但是可以留住这一刻就觉得超级满足了,和喜欢的人走在樱花大道上 真是一件浪漫的事啊,春天的风温柔地吹落樱花瓣 哗啦啦漫天的粉红色,是人间的三月天',
                likes = [],
                collect = [],
                time = utils.formatTime(new Date()),
                type = 'audioVideo',
                recommend = true,
            },
            commentData,
            isFollow,
            isLike,
            isCollect,
            userInfo
        } = this.props;
        let {Id, comment} = this.state;
        return <div className="det">
            <div className="header">
                <img onClick={ev => {
                    this.props.history.go(-1)
                }} className="back" src={require("../../common/images/fanhui.png")}/>
                <img id="images" src={userImg} alt=""/>
                <span>{userName}</span>
                <img className="more" src={require("../../common/images/more.png")}/>
            </div>
            <div className="detail">
                <div className="pic">
                    <img src={nodeImg} alt=""/>
                </div>
                <div className="noteComment">
                    <div className="userName">
                        <img src={userImg} alt=""/>
                        <span>{userName}</span>
                        {id !== Id ? !isFollow ? <button onClick={this.follow} data-fid={id}>+关注</button> :
                            <button>已关注</button> : ''}
                    </div>
                    <div className="personNote">
                        <h2>{title}</h2>
                        <p>{content}</p>
                        <span>{time}</span>
                        <span>{collect.length}次收藏</span>
                        <span>{likes.length}次点赞</span>
                    </div>
                </div>
            </div>
            <div className="otherComment">
                <div className="comment" onClick={ev => {
                    this.props.history.push(`/comment/${nodeId}`)
                }}>
                    <span>笔记评论</span>
                    <span>共{commentData.length}条评论</span>
                    <i>&gt;</i>
                </div>
                <div className="addComment">
                    <img src={userInfo['userImg']} alt=""/>
                    <input type="text" placeholder="想勾搭，先评论" onChange={this.handInp} value={comment}/>
                    <button onClick={this.handComment} data-nodeid={nodeId}>发送</button>
                </div>
                {
                    commentData.map((item, index) => (
                        <div className="content" key={index}>
                            <div className="photo">
                                <img src={item['userImg']} alt=""/>
                            </div>
                            <div className="text">
                                <span>{item['userName']}</span>
                                <p>{item['text']}</p>
                                <i>{item['time']}</i>
                                <span className="replay">回复</span>
                                <i className="iconfont icon-xiaolian"></i>
                                <i className="number">88</i>
                                <div className="comment">
                                    <div>
                      <span className="author">
                       <i>陈小云(作者):你就正常吃到七分饱，少吃多餐也可以，我断食两天不是为了掉体重，而是为了降低食欲</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            <ul className="footer">
                {!isLike ? <li onClick={this.likeClick} data-nodeid={nodeId}>
                    <i className="icon-heart"></i>
                    <span>赞</span>
                    <span>{likes.length}</span>
                </li> : <li data-nodeid={nodeId}>
                    <i className="icon-heart active"></i>
                    <span>赞</span>
                    <span>{likes.length}</span>
                </li>}

                <li>
                    <i className="icon-chat-bubble-dots"></i>
                    <span>评论</span>
                    <span>{commentData.length}</span>
                </li>
                {!isCollect ? <li onClick={this.collectClick} data-nodeid={nodeId}>
                    <i className="icon-star-full"></i>
                    <span>收藏</span>
                    <span>{collect.length}</span>
                </li> : <li data-nodeid={nodeId}>
                    <i className="icon-star-full active"></i>
                    <span>收藏</span>
                    <span>{collect.length}</span>
                </li>}

            </ul>
        </div>
    }

    handInp = (ev) => {
        this.setState({
            comment: ev.target.value
        });
    };
    follow = (ev) => {
        let {Id} = this.state;
        let data = {
            id: Id,
            fId: ev.target.dataset.fid
        };
        this.setState({
            follow: data
        }, async function () {
            let result = await addFollow(this.state.follow);
            console.log(result);
        });
        this.setState({
            isFollow:true
        });
    };
    likeClick = (ev) => {
        let {Id} = this.state;
        let data = {
            id: Id,
            nodeId: ev.target.dataset.nodeid
        };
        this.setState({
            idParam: data
        }, async function () {
            let result = await addLike(this.state.idParam);
            console.log(result);
        });
        this.setState({
            isLike:true
        });
    };
    collectClick = (ev) => {
        let {Id} = this.state;
        let data = {
            id: Id,
            nodeId: ev.target.dataset.nodeid
        };
        this.setState({
            idParam: data
        }, async function () {
            let result = await addCollect(this.state.idParam);
            console.log(result);
        });
        this.setState({
            isCollect:true
        });
    };
    handComment = (ev) => {
        let {comment, Id} = this.state;
        let nodeId = ev.target.dataset.nodeid;
        let data = {
            id: Id,
            nodeId,
            text: comment,
            time: utils.formatTime(new Date(), '{0}-{1}-{2}'),
        };
        this.setState({
            commentParam: data
        }, function () {
            addComment(this.state.commentParam);
            setTimeout(() => {
                this.props.history.push(`/comment/${nodeId}`)
            }, 500);
        });
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Node))
