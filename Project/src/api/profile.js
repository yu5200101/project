import  axios from './index';

export async function queryUserInfo(id) {
    return  await axios.get(`/profile/info?id=${id}`);
}