/**
 * web 服务器一般指 网站服务器， 是指驻留于因特网上某种类型计算机的程序， web服务器的基本功能
 * 就是提供web信息浏览服务。 它只需支持http 协议， HTML文档格式及URL ， 与客户端的网络浏览器配合
 */

/**
 * web 应用架构 
 * Client 、 Server 、 Business Layer  、Data Layer
 * 客户端 、 服务器 、逻辑层 、数据层
 * 
 */

/** 使用node 创建 Web 服务器 */
const http = require("http")
const url = require("url")
const fs = require("fs")
http.createServer(( req ,res )=>{
    let pathname = url.parse( req.url).pathname
    console.log("Request for " + pathname +  "  received")
    fs.readFile( pathname.substr(1) ,( err ,data )=>{
        if(err){
            console.log(err )
            res.writeHead( 404 , {"Content-type":"text/html"})
        }
        else{
            res.writeHead( 200,{"Content-type":"text/html"})
            res.write( data.toString())
        }
        res.end()
    })
}).listen(8888)
console.log("监听端口号 8888")