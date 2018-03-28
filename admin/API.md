##宝书APP
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
- 发布信息 
   +  example[
img:"http://ci.xiaohongshu.com/7338bf98-62cb-4170-8027-18d93a3240f3@r_750w_750h_ss1.jpg",
title:"迟来的#陈佳影#口红色号来了",
"content":"No.1 品牌：MAC 色号：chili我一直很钟爱MAC这个品牌，也是我觉得最值得入的口红品牌之一，价格也算比较平价了，这款小辣椒相比较而言不干，而且很容易上色，这个涂的轻一些偏橘红色，重一些会偏砖红色，几乎算是陈佳影剧中蓝色大衣的标配了";
]
- userList.json
{
   + num
   + data:
   [
   {
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
       }
   ]
}
        
- nodeList.json
{
  + num
  + data :
  [
   {
      + id,
      + nodeId,
      + nodeImg:""",
      + title:"",
      + content:"""
      + likes:[id],
      + collect:[id],
      + type,
      + recommend,
      }
  ]
}
  
    
- collectList.json
     [
        {
  + id,
  + collectList:['nodeId'],
    }
     ]
  
  
- commentList.json
   [
   {
   + nodeId,
   + textList:[{id:,text:，time}]
  }
  ]
  
  
- hotSearch.json
 {
  + key:[]
 }
 
 
# API
- PS:data代表客户端传给服务端的数据，result代表服务端传给客户端的数据
- 所有接口的data里面包含的数据都需要前端传给后台，除`/nodeList/addNode`这个接口，下面有这个接口传递的data的详细信息
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
       + userName:"",
       + userImg:"",
       + nodeId:number,
       + nodeImg:"",
       + title:"",
       + content:"",
       + likes:[] array 获取点赞数量取length,
       + collect:[] array 获取点赞数量取length,
       + time:"",
       + type:"",
       + recommend:boolean}]
![Alt text](./1522142457418.png)

  
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
     + userName:"",
     + userImg:"
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
![Alt text](./1522137749578.png)

- 发布 - 发布信息到服务器
  + url:/nodeList/addNode
  + data:{
      + id:number,（前端传过来用户id）
      + nodeId:number,（不需要前端传过来）
      + nodeImg:"",(前端传过来网上地址图片)
      + title:"",(前端传过来标题)
      + content:"",(前端传过来笔记内容)
      + likes:[] array 获取点赞数量取length,(不需要前端传过来)
      + collect:[] array 获取点赞数量取length,(不需要前端传过来)
      + time:"",(前端传过来new Date()的日期例如：2018-03-27 14:00:00)
      + type:"",(前端传过来类型)
      + recommend:boolean, (不需要前端传递过来)
  }
  + method:post
  + result:"success"or"error"
 ![Alt text](./1522137902637.png)


- 我的收藏
 - 两次读取信息
    + url:/nodeList/collect
    + data:{
       + id:number
       + page:number
    }
    + method:post
    + result:[
       {
       + id:number,
       + userName:"",
       + userImg:"
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
   ![Alt text](./1522138938638.png)


- 搜索历史
  + url：/nodeList/searchKey
  + method:get
  + result:{
      + [] 
    }
  ![Alt text](./1522139370612.png)

- 获取评论
      + url:/nodeList/comment
      + data:{
         + nodeId:num,
         + page:number
     }
     + method:post
      + result:[
      {
         + "id": 1,
         + userName:"",
         + userImg:"",
         + "text": "你说的真好哦",
         + "time": "2018-03-26"
    }, 
      ]
   ![Alt text](./1522139157145.png)

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
![Alt text](./1522139209718.png)
- 我的登录
  + url:/profile/login
  + method:post
  + data:{
     + tel:"",
     + pass:""
  }  
  + result:'success'or'error'
- 我的登录
  + url:/profile/login
  + method:get
  + result:session.loginId||0
- 我的信息
  + url:/profile/info
  + method:get
  + result:{
      + id:number,
      + tel:"",
      + pass:"",
      + userName:"",
      + userImg:"",
      + birth:"",
      + sex:number(0代表女，1代表男)
      + bio:"",
      + follow:[],
      + fens:[]
      }
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
- 获取轮播图
 + url:/nodeList/banner
 + method:get
 + result:[
  {
       + id,
       + title,
       + img
   }
  ]
  ![Alt text](./1522143648750.png)
- 添加收藏 对应的id中 添加nodeId
 + url:/nodeList/addCollect
 + method:post
 + data:{
     + id:num
     + nodeId:num
}
 + result:'success' or 'error' 
 ![Alt text](./1522150912688.png)

- 点赞 添加用户id
 + url:/nodeList/like
 + method:post
 + data:{
      + id:num
      + nodeId:num
  }
 + result:'success' or 'error'
![Alt text](./1522152561042.png)

- 关键字搜索获取笔记信息
 + url:/nodeList/search
 + method:post
 + data:{
     key:'',
     page
}
 + result:[
       {
       + id:number,
       + userName:"",
       + userImg:"
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
    
![Alt text](./1522152466343.png)

- 关注 添加用户fid
 + url:/profile/follow
 + method:post
 + data:{
       + id:,(自己的id)
       + fId:(用户的id)
         }
  + result:'success' or 'error'

 ![Alt text](./1522152780705.png)

- 编辑个人资料
 + url:/profile/edit
 + method:post
 + data:{
      + id,
      + tel,
      + userName,
      + birth,
      + sex,
      + bio,
 }
 + result:'success' or 'error'
 ![Alt text](./1522153682813.png)
