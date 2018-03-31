import React,{Component} from 'react'
import {connect} from 'react-redux'
import action from '../../store/action/index'
import {NavLink} from 'react-router-dom'
import './note.less'

import {getMyNote} from '../../api/nodeList'

import PropTypes from 'prop-types'

 export default class Note extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }


    render(){

       let {data}=this.props;

        return <div className="notecontainer">
            <div className="noteheader">
                <img src={data.userImg} alt=""/>
                <h2>{data.userName} </h2>
                <p> {data.time}</p>
            </div>
            <div className="nav">
                <NavLink to={`/detail/${data.id}`}>
                    <img src={data.nodeImg} alt=""/>
                </NavLink>
            </div>
        </div>


    }

 }