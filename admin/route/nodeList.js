let express = require('express'),
    route = express.Router(),
    utils = require('./utils');

route.use(async function (req, res, next) {
    req.nodeList = await utils.readFile('nodeList.json');
    next();
});
route.use(async function (req, res, next) {
    req.hotKey = await utils.readFile('hotSearch.json');
    next();
});
route.use(async function (req, res, next) {
    req.commentList = await utils.readFile('commentList.json');
    next();
});
route.use(async function (req, res, next) {
    req.userList = await utils.readFile('userList.json');
    next();
});
route.use(async function (req, res, next) {
    req.collectList = await utils.readFile('collectList.json');
    next();
});
route.use(async function (req, res, next) {
    req.bannerData = await utils.readFile('banner.json');
    next();
});

function getUserInfo(data, req) {
    data.forEach((item) => {
        let curUser = req.userList['data'].find(temp => temp['id'] === Number(item['id']));
        item['userName'] = curUser['userName'];
        item['userImg'] = curUser['userImg'];
    });
    return data;
}

function isExit(data, id) {
    let isExitCur = data.find(item => item === id);
    !isExitCur ? data.push(id) : null;
}

//recommend
route.post('/recommend', function (req, res) {
    //=>req.body
    let page = req.body.page || 1,
        rec = Boolean(req.body.recommend),
        data = req.nodeList.data;
    let dataResult = data.filter((item) => item.recommend === rec);
    dataResult.forEach((item) => {
        req.commentList.forEach((temp) => {
            if (item['nodeId'] === temp['nodeId']) {
                item['comment'] = temp['textList'];
            }
        });
    });
    dataResult.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    dataResult = dataResult.slice(0, page * 2);
    res.send(getUserInfo(dataResult, req));
});
//class
route.post('/class', function (req, res) {
    let type = req.body.type,
        page = req.body.page || 1,
        data = req.nodeList.data;
    let dataResult = data.filter(item => item.type === type);
    dataResult.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    dataResult = dataResult.slice(0, page * 4);
    res.send(getUserInfo(dataResult, req));
});
// add node
route.post('/addNode', function (req, res) {
    let newData = req.body,
        data = req.nodeList.data;
    newData = {
        ...newData,
        id: Number(newData['id']),
        recommend: false,
        likes: [],
        collect: [],
        nodeId: ++req.nodeList.num
    };
    data.push(newData);
    utils.writeFile('nodeList.json', req.nodeList);
    res.send('success');
});

// get collect bode
route.post('/collectAndNode', function (req, res) {
    let id = req.body.id,
        page = req.body.page || 1,
        type = req.body.type,
        data = req.nodeList.data;
    let dataResult = [];
    if (type === 'collect') {
        let curCollect = req.collectList.find(item => item['id'] === Number(id))['collectList'] || [];
        curCollect.forEach((val) => {
            let newNode = data.find(item => item['nodeId'] === val);
            dataResult.push(newNode);
        });
    } else if (type === 'node') {
        dataResult = data.filter(item => item['id'] === Number(id)) || [];
    }
    dataResult.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    dataResult = dataResult.slice(0, page * 4);
    dataResult ? res.send(getUserInfo(dataResult, req)) : res.send(JSON.stringify([]));
});

//get nodeList detail
route.get('/info', function (req, res) {
    let {nodeId} = req.query;
    let dataResult = req.nodeList['data'].find(item => item['nodeId'] === Number(nodeId)) || {};
    let curUser = req.userList['data'].find(temp => temp['id'] === Number(dataResult['id']));
    req.commentList.forEach((item) => {
        if (dataResult['nodeId'] === item['nodeId']) {
            dataResult['comment'] = item['textList'];
        }
    });
    dataResult['userName'] = curUser['userName'];
    dataResult['userImg'] = curUser['userImg'];
    res.send(dataResult);
});
//get hot key
route.get('/searchKey', function (req, res) {
    res.send(req.hotKey.key);
});
//get banner
route.get('/banner', function (req, res) {
    res.send(req.bannerData);
});
// get comment
route.post('/comment', function (req, res) {
    let nodeId = req.body.nodeId,
        page = req.body.page || 1,
        commentData = req.commentList;
    let newComment = commentData.find(item => item['nodeId'] === Number(nodeId))['textList'];
    newComment.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    newComment = newComment.slice(0, page * 4);
    res.send(getUserInfo(newComment, req));
});
//add comment
route.post('/addComment', function (req, res) {
    let nodeId = req.body.nodeId,
        id = req.body.id,
        text = req.body.text,
        time = req.body.time,
        commentData = req.commentList;
    let curData = commentData.find(item => item['nodeId'] === Number(nodeId));
    let obj = {
        id: Number(id),
        text: text,
        time: time
    };
    curData['textList'].push(obj);
    utils.writeFile('commentList.json', commentData);
    res.send('success');
});
// add collect
route.post('/addCollect', function (req, res) {
    let id = Number(req.body.id),
        nodeId = Number(req.body.nodeId);
    let curCollect = req.collectList.find(item => item['id'] === id)['collectList'];
    isExit(curCollect, nodeId);
    let curNode = req.nodeList['data'].find(item => item['nodeId'] === nodeId)['collect'];
    isExit(curNode, id);
    utils.writeFile('collectList.json', req.collectList);
    utils.writeFile('nodeList.json', req.nodeList);
    res.send('success');
});
// iscollect
route.post('/isCollect', function (req, res) {
    let id = Number(req.body.id),
        nodeId = Number(req.body.nodeId);
    let curCollect = req.collectList.find(item => item['id'] === id)['collectList'];
    let isExit = curCollect.find(item => item === nodeId);
    isExit ? res.send('true') : res.send('false');
});
//like
route.post('/like', function (req, res) {
    let id = Number(req.body.id),
        nodeId = Number(req.body.nodeId);
    let curNode = req.nodeList['data'].find(item => item['nodeId'] === nodeId)['likes'];
    isExit(curNode, id);
    utils.writeFile('nodeList.json', req.nodeList);
    res.send('success');
});
//isLike
route.post('/isLike', function (req, res) {
    let id = Number(req.body.id),
        nodeId = Number(req.body.nodeId);
    let curNode = req.nodeList['data'].find(item => item['nodeId'] === nodeId)['likes'];
    let isExit = curNode.find(item => item === id);
    isExit ? res.send('true') : res.send('false');
});
//key search
route.post('/search', function (req, res) {
    let key = req.body.key,
        page = req.body.page || 1;
    let dataResult = req.nodeList['data'].filter(item => {
        console.log(item['title'].indexOf(key));
        return item['title'].indexOf(key) !== -1;
    });
    dataResult.sort(function (a, b) {
        return new Date(b.time) - new Date(a.time);
    });
    dataResult = dataResult.slice(0, page * 4);
    res.send(getUserInfo(dataResult, req));
});


module.exports = route;