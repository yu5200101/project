import  axios from './index';

export async function queryBanner() {
    return await axios.get('/nodeList/banner');
}
export async function queryRecommend(item) {
    return await axios.post('/nodeList/recommend',item);
}
export async function queryHotKey() {
    return await axios.get('/nodeList/searchKey');
}
export async function queryNodeListInfo(nodeId) {
    return await axios.get(`/nodeList/info?nodeId=${nodeId}`);
}

export function queryNodeListClass(item) {
    return axios.post(`/nodeList/class`,item);
}

export function querySearch(item) {
    return axios.post('/nodeList/search',item);
}

export function queryComment(item) {
    return axios.post('/nodeList/comment',item);
}
export function addLike(item) {
    return axios.post('/nodeList/like',item);
}
export function addCollect(item) {
    return axios.post('/nodeList/addCollect',item);
}
export function addComment(item) {
    return axios.post('/nodeList/addComment',item);
}
export function addFollow(item) {
    return axios.post('/profile/follow',item);
}
export function isFollow(item) {
    return axios.post('/profile/isFollow',item);
}