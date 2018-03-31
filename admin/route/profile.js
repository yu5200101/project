let express = require('express'),
    route = express.Router(),
    utils = require('./utils');

route.use(async function (req, res, next) {
    req.userList = await utils.readFile('userList.json');
    next();
});
route.use(async function (req, res, next) {
    req.collectList = await utils.readFile('collectList.json');
    next();
});
function isExit(data, id) {
    let isExitCur = data.find(item => item === id);
    !isExitCur ? data.push(id) : null;
}

route.post('/login', function (req, res) {
    let tel = req.body.tel,
        pass = req.body.pass;
    let curUser = req.userList['data'].find(item => item.tel === tel && item.pass === pass);
    if (!curUser) {
        res.send('用户名密码错误');
        return;
    }
    res.send(JSON.stringify(curUser['id']));
});
route.get('/login', function (req, res) {
    res.send(req.session.loginId + '' || '0');
});
route.get('/info', function (req, res) {
    let userId = req.query.id || req.session.loginId || 0,
        data = req.userList['data'].find(item => item.id === Number(userId));
    res.send(data || 'error');
});

route.post('/register', function (req, res) {
    let tel = req.body.tel,
        pass = req.body.pass;
    let code = Math.round(Math.random() * 9999 + 1111);
    let result = {};
    req.session.loginId = ++req.userList.num;
    let obj = {
        id: req.userList.num,
        pass: pass,
        tel: tel,
        userName: tel,
        userImg: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3875436417,2934656235&fm=27&gp=0.jpg',
        birth: "1997-01-01",
        sex: 0,
        bio: '',
        follow: [],
        fens: []
    };
    let collectObj={
        id: req.userList.num,
        collectList:[]
    };
    req.collectList.push(collectObj);
    utils.writeFile('collectList.json',req.collectList);
    req.userList['data'].push(obj);
    utils.writeFile('userList.json', {
        num: req.userList['num'],
        data: req.userList['data']
    }).then(() => {
        result = {
            "tel": tel,
            "pass": pass,
            "code": code
        };
        res.send(result);
    }).catch(() => {
        res.send('error');
    })
});
//follow
route.post('/follow', function (req, res) {
    let id = Number(req.body.id),
        fId = Number(req.body.fId);
    let curUser = req.userList['data'].find(item => item['id'] === id)['follow'];
    isExit(curUser, fId);
    let followUser = req.userList['data'].find(item => item['id'] === fId)['fens'];
    isExit(followUser, id);
    utils.writeFile('userList.json', req.userList);
    res.send('success');
});
//isFollow
route.post('/isFollow', function (req, res) {
    let id = Number(req.body.id),
        fId = Number(req.body.fId);
    let curUser = req.userList['data'].find(item => item['id'] === id)['follow'];
    let isExit = curUser.find(item => item === fId);
    isExit ? res.send('true') : res.send('false');
});
//edit profile
route.post('/edit', function (req, res) {
    let newUser = req.body,
        id = Number(newUser['id']);
    let curUser = req.userList['data'].find(item => item['id'] === id);
    curUser = {
        ...curUser,
        tel: newUser['tel'],
        userName: newUser['userName'],
        birth: newUser['birth'],
        sex: newUser['sex'],
        bio: newUser['bio']
    };
    req.userList['data'].splice(id - 1, 1, curUser);
    utils.writeFile('userList.json', req.userList);
    res.send('success');
});
module.exports = route;