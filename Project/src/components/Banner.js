import React from 'react';
import PropTypes from 'prop-types';
import ReactSwipe from 'react-swipe';
import './Banner.less'


export default  class Banner extends React.Component{
    static defaultProps={
        data:[],
        className:"",
        initSlide:0,
        auto:3000,
        isFocus:true,
    };
    static propTypes={
        data:PropTypes.array,
        style:PropTypes.object,
        className:PropTypes.string,
        initSlide:PropTypes.number,
        auto:PropTypes.number,
        isFocus:PropTypes.bool,
    };

    constructor(props){
        super(props);
        //initState
        this.state={
            step:props.initSlide,
        };
    }

    render(){
        let {data,className,initSlide,auto,isFocus}=this.props;
        if(data.length===0){
            return null;
        }
        return (
            <div className="bannerBox">
                <ReactSwipe className={className}
                            swipeOptions={{
                                startSlide:initSlide,
                                auto,
                                callback:index=> {
                                    this.setState({
                                        step: index
                                    });
                                }
                            }}>
                    {data.map((item,index)=>{
                        let {
                            img=require('../common/images/default.jpg'),
                            title=''
                        } =item;
                        return <div key={index}>
                            <img src={img} alt={title}/>
                        </div>
                    })}
                </ReactSwipe>

                {/*FOCUS*/}
                {isFocus?<ul className="focus">
                    {data.map((item,index)=>{
                        return <li key={index}
                                   className={index===this.state.step?'active':''}>
                        </li>
                    })}
                </ul>:null}
            </div>
        )
    }
}


