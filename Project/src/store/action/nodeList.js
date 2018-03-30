import * as Types from '../action-types'
import {queryHotKey,queryRecommend} from '../../api/nodeList'

const nodeListAction = {

    async getRecommend(item) {
        return {
            type: Types.RECOMMEND,
            payload: await queryRecommend(item)
        }
    },
    async getHotKey(){
        return {
            type:Types.HOT_KEY,
            payload:await queryHotKey()
        }
    }
};
export default nodeListAction;