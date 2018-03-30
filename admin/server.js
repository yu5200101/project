let express = require('express'),
    session = require('express-session'),
    app = express();

app.listen(1234, () => {
    console.log(`http://localhost:1234`);
});

/* API */
app.use(session({
    secret: 'zfpx',//=>用来对SESSION-ID相关的COOKIE进行签名
    saveUninitialized: false, //=>是否自动保存未初始化的会话，建议FALSE
    resave: false, //=>是否每次都重新保存会话，建议FALSE
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 //=>有效期，单位是毫秒
    }
}));
//CORS
app.use(function (req, res, next) {
    
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", true);
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE");
    //,OPTIONS
    /*if(req.method === 'OPTIONS'){
        res.send('current services support cross domain requests!');
    }*/
    next();
});

//body-parser middleware

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(`/nodeList`,require('./route/nodeList'));
app.use(`/profile`,require('./route/profile'));

app.use(function (req,res,next) {
   res.status(404);
   res.send('not found');
});