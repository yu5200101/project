import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux'
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom';
import "./common/css/reset.min.css";
import './common/css/public.less';
import Home from "./routes/Home";
import Message from "./routes/Message";
import Classify from "./routes/Classify";
import Search from "./routes/Search";
import Add from "./routes/Add";
import All from "./routes/All";
import store from "./store";
import Detail from "./routes/Detail";
import Comment from "./routes/Comment";
import MyHome from './routes/MyHome';
import Login from './routes/Login';
import Profile from './routes/Profile';
import Register from './routes/Register';
import ProfileInfo from './routes/profileInfo';
import '../src/common/css/style.css';
import Setting from "./routes/Mine/Setting/Setting";


ReactDom.render(<Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path="/" exact component={MyHome}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/myhome" exact component={MyHome}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/register" component={Register}/>
            <Route path="/detail/:nodeId?" component={Detail}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/comment/:nodeId?" component={Comment}/>
            <Route path="/message" component={Message}/>
            <Route path="/search" component={Search}/>
            <Route path="/add" component={Add}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/profileInfo" component={ProfileInfo}/>
            <Route path="/setting" component={Setting}/>
            <Route path="/all/:key?" component={All}/>
            <Redirect to="/myhome"/>
        </Switch>
    </HashRouter>
</Provider>,window.root);
