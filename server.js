let http = require("http") //引入http模块
const url = require("url")
// http.createServer( ( request , response)=>{
//     /**
//      * 发送http 头部
//      * http 状态值：200 ：OK
//      * 内容类型：text/plain
//      */
//     response.writeHead( 200,{"content-Type":"text/plain"});
//     /**
//      * 发送响应数据 "hello world "
//      */
//     response.end("hello world\n")
// }).listen(8888);//监听端口 8888
/**
 * 终端打印如下信息
 */
// console.log("server listen 8888 ssssssss")

// function start( route ){
//     function onRequest( request , response){
//         let pathname = url.parse( request.url).pathname;
//         console.log("request for  " + pathname +"  received")
//         route( pathname)
//         response.writeHead( 200 , { "Content-type": "text/plain"})
//         response.write("hello world ,my future")
//         response.end();
//     }
//     http.createServer( onRequest ). listen(8000)
//     console.log("the  server start")
// }
module.exports = function ( route ){
    function onRequest( request , response){
        /**
         * url.parse( req.url , boolean)  解析url 路径
         * url.parse() 的 boolean 默认为false。 为true 时 ，query属性会生成一个对象 ，如果为 false 为生成一个未解析，未编码的字符串 。
         */
        let pathname = url.parse( request.url).pathname;
        console.log("request for  " + pathname +"  received")
        route( pathname)
        response.writeHead( 200 , { "Content-type": "text/plain"})
        response.write("hello world ,my future 55555")
        /**
         * 结束响应 
         * 告诉客户的所有消息已经发送，当所有要返回的内容发送完毕时，改函数必须调用一次
         * 如果不调用该函数， 客户端将永远处于等待状态
         */
        response.end();
    }
    http.createServer( onRequest ). listen(8000)
    console.log("the  server start")
}