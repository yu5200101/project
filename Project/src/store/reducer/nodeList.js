import * as Types from '../action-types';

const nodeListReducer = (state = {
    recommendData: [],
    hotKey: [],
    classData: [],
    isFollow: false,
    isLike: false,
    isCollect: false,
    commentData:[],
    searchData:[]
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.RECOMMEND:
            state.recommendData = action.payload;
            break;
        case Types.HOT_KEY:
            state.hotKey = action.payload;
            break;
        case Types.CLASS_NODE:
            state.classData = action.payload;
            break;
        case Types.IS_FOLLOW:
            state.isFollow = action.payload;
            break;
        case Types.IS_LIKE:
            state.isLike = action.payload;
            break;
        case Types.IS_COLLECT:
            state.isCollect = action.payload;
            break;
        case Types.GET_COMMENT:
            state.commentData = action.payload;
            break;
        case Types.GET_SEARCH:
            state.searchData = action.payload;
            break;
    }
    return state;
};

export default nodeListReducer;

