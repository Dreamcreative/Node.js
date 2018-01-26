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
// fs.readFile("input.txt" , ( err , data) =>{
//     if(err) return console.error(err );
//     console.log( data.toString()) ;
// })



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


/** 
 * 打开文件  异步模式
 *  fs.open( path , flags [, mode ] ,callback)
 */
// console.log("准备打开文件！")
// fs.open( "input.txt" , "r+" , ( err , fd )=>{
//     if( err ){ 
//         return console.error( err )
//     }
//     console.log( "文件打开成功")
// })


/**
 * 获取文件信息
 *  fs.stat( path , callback)
 *  fs.stat( path ) 执行后，会将stats类的实例返回给器回调函数，可以通过stats类中提供的方法判断文件相关属性
 * 
 */
// fs.stat( "input.txt" ,( err , stats )=>{
//     if(err ){
//         return console.error( err ) 
//     }
//     console.log( stats)
//     console.log( "读取文件信息成功！")

//     console.log( "是否为文件( isFile) ？" + stats.isFile())
//     console.log( "是否为目录( isDirectory ) ？" + stats.isDirectory())
// })


/**
 * 写入文件
 *  fs.writeFile( file , data [, options] ,callback)
 *  如果文件存在 ，该方法写入的内容会覆盖旧的文件内容
 */
// console.log("开始写入文件")
// let data= "我是通过写入的文件内容"
// fs.writeFile( "input.txt" , data ,( err )=>{
//     if( err ){
//         return console.error ( err )
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile("input.txt" , ( err , data )=>{
//         if(err){
//             return console.error( err )
//         }
//         console.log("异步读取文件数据：  " + data.toString())
//     })
// })

/**
 * 读取文件
 * fs.read( fd , buffer , offset , length , position , callback )
 * fd  通过 fs.open()方法返回的文件描述符
 * buffer  数据写入的缓冲区
 * offset  缓冲区写入的写入偏移量
 * length  要从文件中读取的字节数
 * position  文件读取的其实位置， 如果position 的值为 null， 则会从当前文件指针的位置读取
 * Callback 回调函数， 有三个参数 err , bytesRead  , buffer  , err 为错误信息 bytesRead 表示读取的字节数
 *      Buffer 为缓冲区对象
 */
const buf = new Buffer(1024) ;
console.log("准备打开已存在的文件！")
fs.open( "input.txt" , "r+" ,( err ,fd )=>{
    if(err ){
        return console.error(err)
    }
    console.log("文件打开成功！");
   console.log("准备读取文件：");
   fs.read( fd, buf ,0 , buf.length , 0 ,( err , bytes )=>{
       if(err){
           console.log(err)
       }
       console.log( bytes + "   字节被读取")
       if( bytes > 0 ){
           console.log( buf.slice(0 ,bytes ).toString())
       }
   })
})



console.log("完成");