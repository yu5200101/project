import React from 'react';
import "../Comment.less";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import action from "../../store/action";
import {withRouter} from 'react-router-dom';

class Comments extends React.Component {
    static propTypes = {
        commentData:PropTypes.array.isRequired,
    };
    constructor(props) {
        super(props);
    }


    // 把参数绑定到  构造函数的state里面

    render() {
        let{commentData} = this.props;
        return (
            <div className="allComment">
                <header>
                    <img src={require("../../common/images/fanhui.png")} onClick={ev => {
                        this.props.history.go(-1);
                    }}/>
                    <span>1360条评论</span>
                </header>
                <div className="commentContent">
                    {
                        commentData.map((item,index)=>(
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
            </div>
        )
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(Comments))

