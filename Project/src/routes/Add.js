import React from 'react';
import './Add.less';



export default class Add extends React.Component{
    constructor(){
        super();
    }

    render(){
        return (
            <div className="add">
                <div className="top">
                    <span onClick={(ev)=>{
                        this.props.history.go(-1);
                    }}>&lt;</span>
                    <h3>发布</h3>
                </div>
                <div className="info">
                    <ul>
                        <li className="input-1">
                            <input type="text" placeholder="添加标题"/>
                        </li>
                        <li className="input-2">
                            <input type="text" placeholder="说说你的心得吧~"/>
                        </li>
                        <li className="input-1">
                            <input type="text" placeholder="添加图片"/>
                        </li>
                        <li className="box">
                            <img src={require("../common/images/header.jpg")} alt=""/>
                            <span>+</span>
                        </li>
                    </ul>
                </div>
                <div className="tab">
                    <span>发布</span>
                </div>
            </div>
        )
    }
}