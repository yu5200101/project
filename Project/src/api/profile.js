import  axios from './index';
let md5 = require("blueimp-md5");

export function getProfileInfo(id){
    return axios.get(`/profile/info?id=${id}`)
}
export function getCheckID(usertel,pass) {
    return axios.post('/profile/register',{
        tel:usertel,
        pass:md5(pass)
    })
}

export function login(user,pass) {
    return axios.post('/profile/login',{
        tel:user,
        pass:md5(pass)
    })
}
export function register(user,pass) {
    return axios.post('/profile/register',{
        tel:user,
        pass:md5(pass)
    })
}

export function isLogin() {
    return axios.get('/profile/login')
}
export function editUserInfo(item) {
    return axios.post('/profile/edit',item);
}

