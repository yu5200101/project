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

ReactDom.render(<Provider store={store}>
    <HashRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/detail/:nodeId?" component={Detail}/>
            <Route path="/classify" component={Classify}/>
            <Route path="/comment/:nodeId?" component={Comment}/>
            <Route path="/message" component={Message}/>
            <Route path="/search" component={Search}/>
            <Route path="/add" component={Add}/>
            <Route path="/all/:key?" component={All}/>
            <Redirect to="/home"/>
        </Switch>
    </HashRouter>
</Provider>,window.root);
