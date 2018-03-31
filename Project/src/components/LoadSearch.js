import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './LoadMore.less';
import action from '../store/action/index';

class LoadSearch extends React.Component {

    static propTypes = {
        keys: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            param: {
                key: '',
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
        let {keys} = this.props;
        this.setState({
            step: ++step
        });
        let data = {
            key:keys,
            page: step
        };
        this.setState({
            param: data
        }, function () {
            this.props.getSearch(this.state.param);
        });
    }
}

export default withRouter(connect(state => ({...state.nodeList}), action.nodeList)(LoadSearch));