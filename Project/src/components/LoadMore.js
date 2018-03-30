import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './LoadMore.less';
import action from '../store/action/index';

class LoadMore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            param: {
                recommend: true,
                page: 1
            }
        }
    }

    render() {
        return <div className="load_more">
            <p className="line"></p>
            <button onClick={this.loadMore}>加载更多</button>
            <p className="line"></p>
        </div>
    }

    loadMore = () => {
        let {step} = this.state;
        this.setState({
            step:++step
        });
        let data={
            recommend: true,
            page: step
        };
        this.setState({
           param:data
        },function () {
                this.props.getRecommend(this.state.param);
        });
    }
}

export default withRouter(connect(state=>({...state.nodeList}),action.nodeList)(LoadMore));