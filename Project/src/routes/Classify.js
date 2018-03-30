import React from 'react';
import Classed from "./Classed/Classed";
import Nav from "../components/Nav";


export default class Classify  extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <Nav/>
                <Classed/>
            </div>
        )
    }
}