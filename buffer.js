/**
 * javascript 语言自身只有字符串数据类型， 没有二进制数据类型
 * 但是在处理像TCP流或文件流是，必须使用到二进制数据，因此在nodejs 中，定义了一个Buffer类
 * ，该类用来创建一个专门存放二进制数据的缓存区
 * 在nodejs 中Buffer类是随node 内核一起发布的核心库，Buffer库为nodejs 带来了一种存储原始数据
 * 的方法，可以让nodejs处理二进制数据，每当需要在nodejs中处理I/O 操作中移动的数据是，就有可能使用Buffer库
 * 。原始数据存储在Buffer类的实例中。一个Buffer类似于一个整数数组，但他对应于V8堆内存之外的
 * 一块原始内存
 */

// const buf = Buffer.from("maxiao","base64" )
// console.log(buf)
// console.log(buf.toString("hex"))
/**
 * 创建Buffer类
 */
let buf1 = Buffer.from("123456789")
let buf2 = Buffer.from("qwert")
/**
 * 解码缓冲去数据并使用并使用指定的编码返回字符串。默认为“utf8”
 */
// console.log(buf1.toString()  ,buf2.toString()) 
 /**
  * 将 Node Buffer 转换为JSON对象的函数语法
  */
// console.log( buf1.toJSON()   ||  buf1.toJSON(buf1) )  
/**
 * Node 缓冲区合并的语法 
 *  Buffer.concat( [ buf1 , buf2 ] )
 */
// console.log( Buffer.concat([buf1 , buf2 ]).toString())

/**
 * 缓冲区比较 
 * buf.compare( otherBuffer) 
 * 返回一个数字，表示buf 在otherBuffer 之前 ，之后 或相同
 */
// console.log( buf1.compare( buf2 ))

/**
 * Node 缓冲区拷贝语法 
 * buf.copy( targetBuffer[, targetStart[, sourceStart[, sourceEnd]]] )
 */
/**将buf1 插入到 buf2 指定位置上 */
// buf1.copy( buf2 ,3)
// console.log( buf2.toString() )
