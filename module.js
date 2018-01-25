/**
 * 为了让 node.js 的文件可以相互调用。 node.js提供了一个简单的模块系统
 * 模块是 node.js 应用程序的基本组成部分，文件和模块是意义对应的，
 * 换言之，一个node.js 文件就是一个模块，这个文件可能是JavaScript 代码
 * JSON 或者编译过的C/C++ 扩展
 * 
 * node.js 提供了 exports 和require 两个对象， 其中 exports 是模块公开的接口，
 * require用于从外部获取一个模块的接口，即所获取模块的 exports 对象
 */

let Hello = require("./module/hello")
let hello = new Hello()
hello.setName("ssss")
hello.sayHello();

/***
 * 服务器的模块放在哪里
 *  node.js 中 自带了一个叫做http 模块 ，我们在代码中请求他并把返回值赋给一个本地变量
 *  这把我们的本地变量变成了一个拥有所以http模块所提供的公共方法的对象
 * node.js 的require 方法中的文件查找策略 如下
 *  1.  require 在解析文件名之后 ，  先检查该模块是否在文件模块缓存区中 
 *  2.  再检查模块是否在原生模块列表中， 如果在原生模块列表 ，就加载原生模块 ，并缓存原生模块
 *  3.  如果不在原生模块中 ，就查找文件模块 ，根据扩展名载入文件模块 ， 并缓存文件模块 
 *  4.  返回 exports
 *  
 * 
 *  图片 (./module/nodejs-require.jpg)
 */  