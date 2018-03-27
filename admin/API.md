##小红书APP
- 底部导航：首页，发现，发布，消息，我
- 首页：轮播图，笔记
- 发现：美食,时尚，美妆，运动，影音，旅行，居家，母婴，读书，数码，时尚男士
- 发布页: 图片，标题，内容
- 消息：收到的赞和收藏，收到的评论和@，新增关注
- 我：头像，昵称，关注，粉丝，签名，个人笔记，个人收藏
- 设置：
- 退出登录：返回登录注册页
- 登录页
- 注册页
- 详情页，
- 评论页，
- userList.json
  + id,
  + tel,
  + pass,
  + userName,
  + userImg,
  + birth,
  + sex,
  + bio,
  + follow,
  + fens,
- nodeList.json
  + id,
  + nodeId,
  + nodeImg:""",
  + title:"",
  + content:"""
  + likes:[id],
  + collect:[id],
  + type,
  + recommend,
- collectList.json
  + id,
  + collectList:['nodeId'],
- commentList.json
  + nodeId,
  + textList:[{id:,text:，time}]
- hotSearch.json
  + key
 
# API
- PS:data代表客户端传给服务端的数据，result代表服务端传给客户端的数据
- 首页 - 放推荐的笔记
   + url: /nodeList/recommend,
   + data:{
      + recommend:true,(定死了)
      + page:number
      }
   + method: post
   + result:[
   {
       + id:number,
       + nodeId:number,
       + nodeImg:"",
       + title:"",
       + content:"",
       + likes:[] array 获取点赞数量取length,
       + collect:[] array 获取点赞数量取length,
       + time:"",
       + type:"",
       + recommend:boolean}]
   
- 发现 - 分类的笔记 
  + url:/nodeList/class
  + data:{
     + type:"",
     + page:number
  }
  + method:post
  + result:[
   {
     + id:number,
     + nodeId:number,
     + nodeImg:"",
     + title:"",
     + content:"",
     + likes:[] array 获取点赞数量取length,
     + collect:[] array 获取点赞数量取length,
     + time:"",
     + type:"",
     + recommend:boolean,    
     }
                  ]
  
 + type:
    + food
    + fashion
    + beauty
    + exercise
    + audioVideo
    + travel
    + home
    + baby
    + book
    + digital
    + man
- 发布 - 发布信息到服务器
  + url:/nodeList/add
  + data:{
      + id:number,
      + nodeId:number,
      + nodeImg:"",
      + title:"",
      + content:"",
      + likes:[] array 获取点赞数量取length,
      + collect:[] array 获取点赞数量取length,
      + time:"",
      + type:"",
      + recommend:boolean,    
  }
  + method:post
  + result:{
      + code:number,(1为success 0 为fasle)
      + message:""(success,error)}
- 我的信息
  + url:/profile/info
  + data:{
      + id:number, 
  }
  + method:post
  + result:{
      + id:number,
      + tel:"",
      + pass:"",
      + userName:"",
      + userImg:"",
      + birth:"",
      + sex:number(0代表女，1代表男)
      + bio:"",
      + follow:number,
      + fens:number}
- 我的收藏
 - 两次请求
  - （1）获取id对应的collectList
    + url:/profile/collect
    + data:{
       + id:number
    }
    + method:get
    + result:{
       + id:number
       + collectList:['nodeId',]
    }
  - （2）获取nodeList中的数据
    + url:/nodeList/collect
    + data:{
    collectList,
    page:number
    }
    + method:post
    + result:[
    {
       + id:number,
       + nodeId:number,
       + nodeImg:"",
       + title:"",
       + content:"",
       + likes:[] array 获取点赞数量取length,
       + collect:[] array 获取点赞数量取length,
       + time:"",
       + type:"",
       + recommend:boolean,    
           }
    ],
    
- 我的登录
  + url:/profile/login
  + method:post
  + data:{
     + tel:"",
     + pass:""
  }  
  + result:{
      + id:number,
      + tel:"",
      + pass:"",
      + userName:"",
      + userImg:"",
      + birth:"",
      + sex:number(0代表女，1代表男)
      + bio:"",
      + follow:number,
      + fens:number}
- 我的注册
   + url:/profile/register
   + method:post
  + data:{
    + tel:"",
    + pass:"",
  }
  + result:{
    + tel:"",
    + pass:"",
    + code:"",(4位随机数)
  }
- 搜索历史
  + url：/nodeList/search
  + method:get
  + result:{
      + key:[] 
    }
- 获取评论
  - 两次请求
    - （1）获取笔记id和评论信息和时间
      + url:/nodeList/comment
      + data:{
         + nodeId:num,
     }
      + result:textList
    - （2）根据用户id对应的用户信息
         + url:/profile/info
         + data:{
             + id, 
         }
         + method:post
         + result:{
             + id:number,
             + tel:"",
             + pass:"",
             + userName:"",
             + userImg:"",
             + birth:"",
             + sex:number(0代表女，1代表男)
             + bio:"",
             + follow:number,
             + fens:number}
- 添加评论
  + url:/nodeList/addComment
  + method:post
  + data:{
     + nodeId
     + id,
     + text,
     + time
 }
  + result:"success"or"error"
