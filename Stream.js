/***
 * Stream 是一个抽象接口， Node 有很多对象实现了这个接口。例如， 对http 服务器发起请求的
 * request 对象就是一个Stream流 ， 还有stdout （标准输出）
 * Stream 有四种 流类型
 *  Readable  可读操作  fs.createReadStream()
 * Writable  可写操作   fs.createWriteStream()
 * Duplex   可读可写操作
 * Transform   操作被写入数据， 然后读出结果
 * 
 * 所以Stream 对象都是EventEmitter 的实例 ，常用事件由 
 * data  当有数据可读时触发
 * end  没有更多的数据可读时触发
 * error  在接收和写入过程中发生错误时触发
 * finish 所以数据已被写入到底层系统时 触发
 */

// /**
//  * 引用 fs 文件系统模块
//  */
// let fs = require("fs")
// let data = ""
// /**创建可读流 */
// let readerStream = fs.createReadStream("input.txt")
// /** 设置编码格式 */
// readerStream.setEncoding("utf8")
// /** 绑定 data 、end 、 error 事件 */
// readerStream.on("data",( chunck )=>{
//     data += chunck;
// })
// readerStream.on( "end" ,()=>{
//     console.log( data )
// })
// readerStream.on( "error" ,(error )=>{
//     console.log(error)
// })
// console.log("执行完成")



// /** 引入 fs 文件系统 */
// let fs = require("fs")
// let data = "这是一个data"
// /** 创建 可写 数据流  写入文件 output.txt 中*/
// let writeStream = fs.createWriteStream("output.txt")
// /** 使用UTF8 编码写入数据   */
// writeStream.write(data ,"utf8")
// /** 标记文件末尾 */
// writeStream.end()
// /** 处理流事件 data 、end 、 error  */
// writeStream.on( "finish" ,()=>{
//     console.log( "写入完成" )
// })
// writeStream.on("error" ,(err)=>{
//     console.log(err)
// })
// console.log("执行完成")

/**  管道流
 * 管道提供了一个输出流到输入流的机制， 通常我们用于从一个流中获取数据并将数据传递到另一个流中
 * 
 */
/** 引用  fs 文件系统模块 */
// let fs  = require("fs")
// /** 创建 可读流  读取文件 input.txt*/
// let readStream = fs.createReadStream("input.txt")
// /** 创建 可写流  写入文件 output.txt */
// let writeStream = fs.createWriteStream("output.txt")
// /** 读取 input.txt 文件内容， 并将内容写入到 output.txt 文件中 */
// readStream.pipe( writeStream )
// console.log("执行完成")


/** 链式流 
 * 链式是通过连接输出流 到另外一个流并创建多个流操作链的机制。链式流一般用于管道操作
 * zlib.createGzip()  文件压缩 
 * zlib.createGunzip()  文件解压 
 */
let fs = require("fs")
/** 引入 zlib 压缩模块 */
let zlib = require("zlib")
/*** 压缩 */
// fs.createReadStream("input.txt")
// .pipe( zlib.createGzip())
// .pipe( fs.createWriteStream("input.txt.zip"))
// console.log( "文件压缩完成")

/** 解压 */
// fs.createReadStream("input.txt.zip")
// .pipe(zlib.createGunzip())
// .pipe( fs.createWriteStream("sss.txt"))
// console.log( "文件解压完成")