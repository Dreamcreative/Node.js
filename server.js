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
        let pathname = url.parse( request.url).pathname;
        console.log("request for  " + pathname +"  received")
        route( pathname)
        response.writeHead( 200 , { "Content-type": "text/plain"})
        response.write("hello world ,my future 55555")
        response.end();
    }
    http.createServer( onRequest ). listen(8000)
    console.log("the  server start")
}