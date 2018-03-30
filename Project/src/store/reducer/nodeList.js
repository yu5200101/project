import * as Types from '../action-types';

const nodeListReducer = (state = {
    recommendData: [],
    hotKey: []
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.RECOMMEND:
            state.recommendData = action.payload;
            break;
        case Types.HOT_KEY:
            state.hotKey = action.payload;
            break;
    }
    return state;
};

export default nodeListReducer;

