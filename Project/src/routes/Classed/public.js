let $=(function () {
    function toArray(likeArray) {
        return [].slice.call(likeArray)
    }
    function getRandom(n,m) {
        n=Number(n);
        m=Number(m);
        if(!isNaN(n)&&!isNaN(m)){
            if(n>m){//如果n>m,交换位置
                [n,m]=[m,n];
            }
            return Math.round(Math.random()*(m-n)+n)
        }else {
            return 0
        }
    }
    function win(attr,value) {
        if(arguments.length==1){
            return document.documentElement[attr]||document.body[attr];
        }else if(arguments.length==2) {
            document.documentElement[attr]=value;
            document.body[attr]=value;
        }
    }
    function offset(curEle) {
        var L=curEle.offsetLeft;
        var T=curEle.offsetTop;
        var P=curEle.offsetParent;
        while (P){
            if(!/MSIE 8/.test(window.navigator.userAgent)){
                L+=P.clientLeft;
                T+=P.clientTop;
            }
            L+=P.offsetLeft;
            T+=P.offsetTop;
            P=P.offsetParent;
        }
        return{
            top:T,
            left:L
        }
    }
    //获取
    function getCss(curEle,attr) {
        var val=window.getComputedStyle(curEle)[attr];
        if(/^[+-]?([1-9]\d+|\d)(\.\d+)?(px|pt|pp|em|rem|deg)?$/.test(val)){
            val=parseFloat(val);
        }
        return val;
    }
    //设置
    function setCss(curEle,attr,value) {
        var reg=/^(width|height|left|right|top|bottom|(margin|padding)(Left|Right|Top|Bottom)?)$/;
        if(reg.test(attr)&&!isNaN(value)){
            curEle.style[attr]=value+'px';
        }else {
            curEle.style[attr]=value
        }
    }
    //批量设置
    function setGroupCss(curEle,objCss) {
        objCss=objCss||[];
        if(objCss.toString()=="[object Object]"){
            for(var key in objCss){
                this.setCss(curEle,key,objCss[key]);
            }
        }
    }
    //css:根据参数的不同来实现不同的操作
    //参数3个:setCss
    //参数2个:第二个是对象:setGroupCss,不是对象:getCss
    /*function css(curEle,arg1,arg2) {
        if(arguments.length==3){
            this.setCss(curEle,arg1,arg2)
        }else if(arguments.length==2){
            if(arg1.toString()=="[object Object]"){
                this.setGroupCss(curEle,arg1)
            }else {
                return this.getCss(curEle,arg1)
            }
        }
    }*/
    function css() {
        if(arguments.length==3){
            setCss.apply(this,arguments)
        }else if(arguments.length==2){
            if(arguments[1].toString()=="[object Object]"){
                setGroupCss.apply(this,arguments)
            }else {
                return getCss.apply(this,arguments)
            }
        }
    }
    return{
        toArray:toArray,
        getRandom:getRandom,
        win:win,
        offset:offset,
        getCss:getCss,
        setCss:setCss,
        setGroupCss:setGroupCss,
        css:css
    }
})();