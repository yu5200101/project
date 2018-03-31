import * as Types from '../action-types'
import {queryHotKey,queryRecommend,queryNodeListClass,queryComment,querySearch} from '../../api/nodeList'

const nodeListAction = {

    async getRecommend(item) {
        return {
            type: Types.RECOMMEND,
            payload: await queryRecommend(item)
        }
    },
    async getComment(item) {
        return {
            type: Types.GET_COMMENT,
            payload: await queryComment(item)
        }
    },
    async getHotKey(){
        return {
            type:Types.HOT_KEY,
            payload:await queryHotKey()
        }
    },
    async getClassNode(item) {
        return {
            type: Types.CLASS_NODE,
            payload: await queryNodeListClass(item)
        }
    },
    async getSearch(item) {
        return {
            type: Types.GET_SEARCH,
            payload: await querySearch(item)
        }
    }
};
export default nodeListAction;