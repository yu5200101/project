import React from 'react';
import './Messages.less';
import Footer from "../../components/Footer";

export default class Messages extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="message">
                <div className="header">
                    <h3>消息</h3>
                </div>
                <div className="notice">
                    <div className="notice-left">
                    <span>打开推送通知</span>
                    <p>以免错过订单发货,活动福利,互动消息</p>
                    </div>
                    <div className="notice-right">
                        <a href="#">开启</a>
                    </div>
                </div>
                <div className="list">
                    <ul>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>收到的赞和收藏</span>
                            <b>&gt;</b>
                        </li>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>收到的评论和@</span>
                            <b>&gt;</b>
                        </li>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>新增关注</span>
                            <b>&gt;</b>
                        </li>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>通知消息</span>
                            <b>&gt;</b>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>私信</span>
                            <b>&gt;</b>
                        </li>
                        <li>
                            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521997632750&di=6ad6fa044f1aabc7956e86a5014c0d66&imgtype=jpg&src=http%3A%2F%2Fimg1.imgtn.bdimg.com%2Fit%2Fu%3D2543985091%2C4149177051%26fm%3D214%26gp%3D0.jpg" alt=""/>
                            <span>客服消息</span>
                            <b>&gt;</b>
                        </li>
                    </ul>
                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}

