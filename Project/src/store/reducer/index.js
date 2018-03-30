import {combineReducers} from 'redux';
import nodeListReducer from './nodeList';
import profileReducer from './nodeList';
const reducer=combineReducers({
    nodeList:nodeListReducer,
    profile:profileReducer,
});

export default reducer;