/**
 * javascript 语言自身只有字符串数据类型， 没有二进制数据类型
 * 但是在处理像TCP流或文件流是，必须使用到二进制数据，因此在nodejs 中，定义了一个Buffer类
 * ，该类用来创建一个专门存放二进制数据的缓存区
 * 在nodejs 中Buffer类是随node 内核一起发布的核心库，Buffer库为nodejs 带来了一种存储原始数据
 * 的方法，可以让nodejs处理二进制数据，每当需要在nodejs中处理I/O 操作中移动的数据是，就有可能使用Buffer库
 * 。原始数据存储在Buffer类的实例中。一个Buffer类似于一个整数数组，但他对应于V8堆内存之外的
 * 一块原始内存
 */

const buf = Buffer.from("roob" , "ascii")
console.log(buf.toString("hex"))