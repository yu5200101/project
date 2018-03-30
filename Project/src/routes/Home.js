import React from 'react';
import Follow from "./Follow/Follow";
import {connect} from 'react-redux';
import action from "../store/action";

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Follow/>
            </div>
        )
    }
}

export default connect(state => ({...state}), action.nodeList)(Home);