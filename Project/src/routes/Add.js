import React from 'react';
import './Add.less';
import Transition from 'react-transition-group/Transition'

import action from '../store/action/index'
import {connect} from 'react-redux'
import {postEmit} from '../api/nodeList'
const duration = 300;
const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
};
const transitionStyles = {
    entering: {opacity: 0},
    entered: {opacity: 1}
};

class Add extends React.Component{
    constructor(){
        super();
        this.state={
            isBlock:false,
            val: '',
            n: -1,
            typeVal:'',
            data:[
                {type:"food",chinese:'美食'},
                {type:"fashion",chinese:'时尚'},
                {type:"beauty",chinese:'美妆'},
                {type:"exercise",chinese:'运动'},
                {type:"audioVideo",chinese:'影音'},
                {type:"travel",chinese:'旅行'},
                {type:"home",chinese:'居家'},
                ]
        }
    }


    render(){
        let {val,data,isBlock,typeVal}=this.state;
        let {match:{params:{id}}}=this.props;
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
                            <input ref={'type'} type="text" placeholder="笔记类型"
                                   value={val}
                                   types={typeVal}
                                   onClick={e=>{
                                       this.setState({isBlock:!isBlock})
                                   }}
                                   onKeyUp={this.handKey}
                            />
                        </li>
                        <Transition in={isBlock} timeout={100}
                                    onEnter={node => {
                                        node.style.display = 'block';
                                    }}
                                    onExited={node => {
                                        node.style.display = 'none';
                                    }}>
                            {state => {
                                return <ul className="type"
                                           style={{
                                               ...defaultStyle,
                                               ...transitionStyles[state]
                                           }}>
                                    {
                                        data.map((item,index)=>{
                                            return  <li key={index} className="active" data-types={item.type}
                                                        onClick={ev=>{
                                                            val=item.chinese;
                                                            this.setState({val});
                                                            this.setState({
                                                                typeVal:ev.target.dataset.types
                                                            });
                                                        }
                                                        }>{item.chinese}</li>
                                        })
                                    }
                                </ul>;
                            }}
                        </Transition>
                        <li className="input-2">
                            <input ref={'commit'} type="text" placeholder="说说你的心得吧~"/>
                        </li>
                        <li className="input-1">
                            <input ref={'addImg'} type="text" placeholder="添加图片"/>
                        </li>
                        <li className="box">
                            <img src={require("../common/images/header.jpg")} alt=""/>
                            <span onClick={()=>{
                                this.refs.addImg.value="http://ci.xiaohongshu.com/7338bf98-62cb-4170-8027-18d93a3240f3@r_750w_750h_ss1.jpg"
                                ;
                            }}>+</span>
                        </li>
                    </ul>
                </div>
                <div className="tab">
                    <span onClick={()=>{
                         let date=new Date();
                         let {type,commit,addImg}=this.refs;
                         let typeValue=type.getAttribute('types');
                         let commitValue=commit.value;
                         let addImgValue=addImg.value;
                        postEmit({
                            id:id,
                            nodeImg:addImgValue,
                            type:typeValue,
                            content:commitValue,
                            time:date,
                        });
                        this.props.history.push('/home');
                        }}>发布</span>
                </div>
            </div>
        )
    }

}
export default connect(state=>({...state.profile}),action.profile)(Add);