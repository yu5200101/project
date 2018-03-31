import React from 'react'
import "./Setting.less"
export default class Setting extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="set">
              <header>
                {/*<img src={require("../img/fanhui.png")} onClick={ev=>{
                  this.props.history.go(-1);
                }}/>*/}
                <span onClick={ev=>{
                    this.props.history.go(-1)
                }}>&lt;</span>
                <h3>设置</h3>
              </header>
              <ul>
                <li onClick={ev=>{this.props.history.push("/issue")}}>
                  <span>个人资料</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>账号与安全</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>我赞过的</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>我的草稿</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>功能申请</span>
                  <span className="dot"></span>
                </li>

              </ul>
              <ul>
                <li>
                  <span>设置隐私</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>新消息通知</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>清除缓存</span>
                  <span>&gt;</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>鼓励一下</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>关于小红书</span>
                  <span>&gt;</span>
                </li>
                <li>
                  <span>意见反馈</span>
                  <span>&gt;</span>
                </li>
              </ul>
              <button>退出帐户</button>
            </div>
        )
    }
}
