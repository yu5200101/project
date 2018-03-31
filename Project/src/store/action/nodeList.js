import * as Types from '../action-types'
import {queryHotKey,queryRecommend,queryNodeListClass,isFollow,isLike,isCollect,queryComment,querySearch} from '../../api/nodeList'

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
    async getIsFollow(item) {
        return {
            type: Types.IS_FOLLOW,
            payload: await isFollow(item)
        }
    },
    async getIsLike(item) {
        return {
            type: Types.IS_LIKE,
            payload: await isLike(item)
        }
    },
    async getIsCollect(item) {
        return {
            type: Types.IS_COLLECT,
            payload: await isCollect(item)
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