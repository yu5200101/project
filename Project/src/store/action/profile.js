import * as Types from '../action-types'
import {queryUserInfo} from "../../api/profile";

const profileAction = {

    async getUserInfo(id) {
        return {
            type: Types.RECOMMEND,
            payload: await queryUserInfo(id)
        }
    },

};
export default profileAction;