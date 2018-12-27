var fs = require("fs");

// fs.stat("upload" , ( err , stats )=>{
//     console.log("err   " , err)
//     if(err){
//         fs.mkdir("upload",( error)=>{
//             if( error){
//                 return false;
//             }
//             console.log("创建 upload 成功")
//         })
//     }else{
//         console.log( stats.isDirectory() )
//     }
// })

// fs.readdir("../node_modules" , ( err , files )=>{
//     console.log( "files     " , files )
// })

// var fileReadStream = fs.createReadStream("index.js") ;
// var count = 0 ;
// var str ="";
// fileReadStream.on("data" , ( chunck )=>{
//     console.log(` ${++count} 接受到 ：${ chunck}`) ;
//     str+= chunck; 
// })
// fileReadStream.on("end" ,()=>{
//     console.log("结束");
//     console.log( count );
//     console.log( str );
// })
// fileReadStream.on("error" ,(err)=>{
//     console.log(err);
// })


// let data = 'console.log("Hello World! 我要存入数据！")';
// var writeStream = fs.createWriteStream("index.js");
// writeStream.write( data , "utf-8");
// writeStream.end();
// writeStream.on("finish" , ()=>{
//     console.log( "写入完成！")
// })