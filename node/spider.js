const { createDouban , bulkCreateDouban} = require("./sequ");
const request = require("request");
const schedule = require('node-schedule');
const fs = require("fs") ;
const helper = require("./helper.js");
const preId = require("./now.js");
let proxys = require("./proxys.js");
const timeout= 15000;
let proxyIndex = proxys.length -1 ;
const pauseTime = 10*60;
let url = "https://api.douban.com/v2/book/";
let id  ;
if(  /(\d+)+?/.test(preId)){
    id =  RegExp.$1 ;
}
if( !id ){
    console.log( "读取不到id~~~")
    process.exit();
}
let scope = id;

// 发送请求
function send( url , proxy ){
    return new Promise( ( resolve , reject ) =>{
        //如果 proxy存在 则设置 代理 ，不存在 则使用 不使用代理
        const proxies = proxy? request.defaults({'proxy': proxy }) : request ; 
        console.log( "proxies      " ,proxy )
        request( {
            url: url,
            proxy: proxy,
            method: 'GET',
            tunnel:false , 
            timeout: timeout 
        } , function (err, req , res) {
            if(err){
                reject( err )
            }
            //处理 返回body 为 html 的情况
            if( JSON.stringify(req.body).indexOf("<") <0){
                if( req && JSON.parse(req.body).msg  ){
                    let msg = JSON.parse(req.body).msg ;
                    reject(  msg   ) ;
                }
                else if( res ){
                    let data = JSON.parse(res);
                    if( data ){
                        let datas = data ;
                        for( let item in datas ){
                            if( typeof datas[item] ==="object"){
                                datas[item ] = JSON.stringify( datas[item ])
                            }
                            if( item==="id"){
                                datas["douban_id"]=datas["id"];
                                delete datas["id"];
                            }
                        }
                        resolve( datas );
                    }
                    reject( "没有数据~" );
                }
            }
            reject( "没有数据~" );
        })
    })
}
// 异步执行 执行函数 ，不阻滞 后续函数执行
( async()=>{
    console.log( "start ");
    let datas = [];
    let index ;
    for( let i= id  ; /*i<id+scope*/ ; i++){
        index = i ;
        try{
            if( proxyIndex < 0){
                proxys = require("./proxys.js");
                proxyIndex = proxys.length-1 ;
            }
            let data = await send( url + i , proxys[ proxyIndex ] ); //请求到的 接口内容
            if( data.douban_id ){
                // datas.push( data );
                console.log( "正在加入数据库");
                await setCache( 'module.exports = "上一次存储ID的下一个ID: ' +  data.douban_id++ +'"' ,"now" )
                await createDouban( data);
            }
            // if( datas.length ==50){
            //     console.log( "正在加入数据库");
            //     await bulkCreateDouban( datas); //将大于50条的数据批量压入数据库
            //     datas=[] ;
            // }
        }catch(err){
            console.log("出错~" ,err );
            if( /rate_limit_exceeded2/.test(err) ){
                /***
                 * 如果超出 请求数量 则换ip再次请求
                 */
                proxyIndex-- ;
                //如果 报错为 请求次数超限  则 暂停
                // await helper.sleep( pauseTime ) ;
            }
            else if( /book_not_found/.test(err) ){
                //如果 报错为 请求次数超限  则 退出node 
                await setCache( index +"," ,"unknown" )
            }else{
                proxyIndex-- ;
            }
        }
        //暂停 n 秒执行
        await helper.sleep( helper.random(3) ) ;
    }
    console.log( "end ");
    // if( datas.length!==0  ){
    //     console.log("最后压入")
    //     //在 循环请求完成后， 将 数组中剩余的 但是没有达到50条数据  导入数据库  
    //     await bulkCreateDouban( datas);
    //     console.log("压入成功")
    // }

    // 然后 退出 node 
    await setCache( "正常退出： "+ index  + "\n" , "cache" ) ; 
    // process.exit();
})();


// 暂停执行
// function sleep( sec ){
//     var now = new Date();
//     var exitTime = now.getTime() + sec*1000 ;
//     while( true ){
//         now = new Date();
//         if( now.getTime() > exitTime) return ;
//     }
// }
// 添加 日志
async function setCache( data , type ){
    let name = helper.timeDir( new Date() ,"ymd" ) ;
    if( type =="cache"){
        await fs.appendFileSync("./cache/cache"+ name +".txt" , data ,( err )=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        } )
    }else if( type =="now" ){
        await fs.writeFileSync("./now.js" , data , (err)=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        })
    }else if( type =="unknown" ){
        await fs.appendFileSync("./unknown/unknown"+name+".txt" , data , (err)=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        })
    }
}
// function random( sec=5 ){
//     return Math.floor( Math.random()*sec +1 ) ;
// }

// function send( url ){
//     return new Promise(function(resolve,reject){
//         request( url ,( err , req , res)=>{
//             if(err){
//                 reject(err);
//                 return;
//             }
//             resolve(res)
//         })
//     })
// }

//暂停执行函数  promise 方式
// function sleep (t){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve(1111)
//         },t*1000)
//     })
// }


// (async()=>{
// async / await  代码例子~
//     console.log("start")
//     for(let i=0; i<100;i++){
//         // try{
            
//         // }catch(err){
//         //     console.log(err)
//         // }

//         let data = await send("http://www.baidu.com");
//         console.log(data)
//         await sleep(3000);
//         console.log("count "+i);
       
//     }

//     console.log("end")

// })()

