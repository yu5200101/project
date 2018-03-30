import React from 'react';
import Messages from "./Message/Messages";
import Nav from "../components/Nav";

export default class Message extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Messages/>
            </div>
        )
    }
}
