
/***
 * 服务器都需要跟用户的浏览器打交道， 如表单提交
 * 表单提交到服务器一般都使用GET/POST 请求
 * 
 * GET 请求 直接 嵌入在路径中，URL 是完整的请求路径， 包括 ？ 后面的部分，因此可以手动解析后面的请求参数
 * 
 */

const http = require("http"),
url = require("url"),
util = require("util")
// http.createServer( (req , res )=>{
//     res.writeHead( 200 , {"Content-type":"text/plain ; charset= utf-8"})
//     res.end( util.inspect( url.parse( req.url , true)))
// }).listen( 8888)

/**
 * 获取URL 的参数
 * url.parse 方法 解析 URL中的参数
 */
// http.createServer( (req ,res)=>{
//     /** 发生请求头 
//      * 状态码 200
//      * 内容类型 / 字符编码格式
//      */
//     res.writeHead( 200 , { "Content-type":"text/plain ;charset=utf-8" })
//     /**解析URL 参数 */
//     let  params = url.parse( req.url , true ).query
//     res.write("网站名：" + params.name)
//     res.write("网站URL：" + params.url)
//     res.end()
// }).listen(8888)

/**
 * 获取 POST 请求内容
 * POST 请求的内容全部的都在请求体重， http.ServerRequest 并没有一个属性内容为请求体，
 * 原因是等待请求体传输可能是一件耗时的工作
 * 比如 上传文件，而很多时候我们可能并不需要理会请求体的内容， 恶意的POST请求会大大消耗服务器的资源
 * 所以nodejs 默认是不会解析请求体的，
 */
/** 
 * POST 基本语法结构
 */
// const querystring = require("querystring")
// http.createServer(( req ,res )=>{
//     let post = ""
//     req.on("data",( chunk)=>{
//         post+=chunk
//     })
//     req.on("end" ,()=>{
//         post = querystring.parse( post )
//         res.end(util.inspect(post))
//     })
// }).listen(8888)

/**
 * 表单通过POST提交并输出数据
 */
/** 引用 querystring 模块 
 * 对http 请求所带的数据进行解析
 * querystring 模块 值提供4个方法 
 * querystring.parse() 将一个字符串反序列化为一个对象
 * querystring.stringify() 将一个对象序列化成一个字符串  与querystring.parse() 相对应
 * querystring.escape() 将传入的字符串进行编码
 * querystring.unescape() 将含有%的字符串进行解码  与querystring.escape() 相对应
 */
const querystring = require("querystring")
let postHTML = `<html><head><meta charset="utf-8"><title>菜鸟教程 Node.js 实例</title></head>
  <body>
  <form method="post">
  网站名： <input name="names"><br>
  网站 URL： <input name="urls"><br>
  <input type="submit">
  </form>
  </body></html>`
  http.createServer((req , res )=>{
      let body= ""
      req.on("data",(chunk)=>{
          body += chunk
      })
      req.on("end",()=>{
          /**将 body 字符串 转为 对象 */
          body = querystring.parse( body)
          console.log(body)
          /** 发送请求头
           * http状态码 200
           * 内容类型 
           */
        res.writeHead( 200 , {"Content-type":"text/html;charset=utf-8"})
        if( body.names && body.urls){
            res.write("网站名：" + body.names )
            res.write("</br>")
            res.write("网站URL：" + body.urls )
        }else{
            res.write(postHTML)
        }
        res.end();
      })
     
  }).listen(8888)