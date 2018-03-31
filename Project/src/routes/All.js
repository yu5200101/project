import React from 'react';
import './All.less';
import {connect} from 'react-redux';
import action from '../store/action/index';
import LoadSearch from '../components/LoadSearch';

class All extends React.Component {
    constructor() {
        super();
        this.state = {
            param: {
                key: '',
                page: 1
            }
        }
    }

    componentDidMount() {
        let {match: {params}} = this.props,
            key = params.key,
            data = {
                key,
                page: 1
            };
        this.setState({
            param: data
        }, function () {
            this.props.getSearch(this.state.param)
        });
    }

    render() {
        let {param:{key}}=this.state;
        let {searchData} = this.props;
        return (
            <div className="all">
                <header className="head">
                    <span onClick={ev => {
                        this.props.history.go(-1);
                    }}>&lt;</span>
                </header>
                <div className="nav">
                    <span>此页有{searchData.length}篇笔记</span>
                    <p>筛选</p>
                    <p>综合排序</p>
                </div>
                <div className="container">
                    <ul>
                        {searchData && searchData.length > 0 ?
                            searchData.map((item, index) => (
                                <li key={index}>
                                    <img src={item['nodeImg']} alt=""/>
                                    <p>{item['title']}</p>
                                    <div className="tab">
                                        <img src={item['userImg']} alt=""/>
                                        <p>{item['userName']}</p>
                                        <div className="tabRight">
                                            <img src={require('../common/images/shoucang.png')} alt=""/>
                                            <span>{item['likes'].length}</span>
                                        </div>
                                    </div>
                                </li>
                            )) : ''
                        }
                    </ul>
                </div>
                <div>
                    <LoadSearch keys={key}/>
                </div>
            </div>
        )
    }
}

export default connect(state => ({...state.nodeList}), action.nodeList)(All);
