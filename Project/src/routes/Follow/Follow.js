import React from 'react';
import './Follow.less';
import Banner from '../../components/Banner'
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";
import {NavLink} from 'react-router-dom'
import {queryBanner} from '../../api/nodeList';
import {connect} from 'react-redux';
import action from '../../store/action/index';

class Follow extends React.Component {

    constructor() {
        super();
        this.state = {
            bannerData: [],
            param:{
                recommend:true,
                page:1
            }
        }
    }

    async componentDidMount() {
        let {param} = this.state;
        let result = await queryBanner();
        this.setState({
            bannerData: result
        });
        let {recommendData, getRecommend} = this.props;
        if (recommendData && recommendData.length === 0) {
            //redux容器中还没有存放数据，此时，我们派发一个任务获取数据然后存储到redux容器中，
            getRecommend(param);
        }
    }

    render() {
        let {recommendData} = this.props;
        return (
            <div className="follow">
                <Nav/>
                <Banner data={this.state.bannerData} auto={3000}/>
                {
                    recommendData.map((item, index) => {
                        return <div className="container" key={index}>
                            <div className="header">
                                <img src={item.userImg} alt=""/>
                                <h2>{item.userName}</h2>
                                <p>{item.time}</p>
                                <div className="nav">
                                    <NavLink to={`detail/${item['nodeId']}`}>
                                        <img src={item['nodeImg']} alt=""/>
                                    </NavLink>
                                    <span>
                                        {item.title}
                            </span>
                                    <ul>
                                        <li>
                                            <img src={require('../../common/images/shoucang.png')} alt=""/>
                                            <h3>{item.likes.length}</h3>
                                        </li>
                                        <li>
                                            <img src={require('../../common/images/xiaoxi.png')} alt=""/>
                                            <h3>{item.comment.length}</h3>
                                        </li>
                                        <li>
                                            <img src={require('../../common/images/xingxing.png')} alt=""/>
                                            <h3>{item.collect.length}</h3>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }
}
export default connect(state=>({...state.nodeList}),action.nodeList)(Follow);
