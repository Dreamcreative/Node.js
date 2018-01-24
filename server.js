let http = require("http") //引入http模块
http.createServer( ( request , response)=>{
    /**
     * 发送http 头部
     * http 状态值：200 ：OK
     * 内容类型：text/plain
     */
    response.writeHead( 200,{"content-Type":"text/plain"});
    /**
     * 发送响应数据 "hello world "
     */
    response.end("hello world\n")
}).listen(8888);//监听端口 8888
/**
 * 终端打印如下信息
 */
console.log("server listen 8888 ssssssss")