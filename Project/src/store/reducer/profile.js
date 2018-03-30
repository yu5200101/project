import * as Types from '../action-types';

const profileReducer = (state = {
    userInfo: {},
}, action) => {
    state = {...state};
    switch (action.type) {
        case Types.GET_USER_INFO:
            state.userInfo = action.payload;
            break;

    }
    return state;
};

export default profileReducer

