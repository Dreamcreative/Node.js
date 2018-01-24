/**
 * fs  node.js 文件系统，模块中的方法均有异步和同步版本，
 * 例如读取文件内容的函数有异步的  fs.readFile() 和同步的 fs.readFileSync()
 * 异步方法函数的最后一个参数为回调函数，回调函数的第一个参数包含了错误信息（err ）
 * 建议使用异步方法，比起同步，异步方法性能更高， 速度更快，而且没有阻塞
 */
let fs = require("fs"); 
/**
 * 阻塞代码示例   同步
 */
// let data = fs.readFileSync("input.txt")
// console.log(data.toString());

/**
 * 非阻塞代码示例  异步
 */
fs.readFile("input.txt" , ( err , data) =>{
    if(err) return console.error(err );
    console.log( data.toString()) ;
})
/**
 * 阻塞与非阻塞调用的不同，
 * 第一个示例在文件读取完后才执行   "完成"
 * 第二个示例我们不用等到文件读取完，这样就可以在读取文件是同时执行接下来的代码，大大提高了性能
 * 阻塞 是按顺序执行 
 * 非阻塞不需要按顺序执行，
 * 所以如果需要处理回调函数的参数，我们就需要卸载回调函数里面
 */
// fs.mkdir("name"+"/name1.txt" ,(err)=>{
//     if(err){ throw err}
//     console.log("创建完成")
// })
console.log("完成");