const { createDouban , bulkCreateDouban} = require("./sequ");
const request    = require("request");
const fs         = require("fs") ;
const helper     = require("./helper.js");
let   proxys     = require("./proxys.js");
const config     = require("./config.json");
let   proxyIndex = proxys.length -1 ;
const timeout    = config.timeout ||1500;
const pauseTime  = config.pauseTime || 10*60;
const url        = config.url;
const endId      = config.endId ;
const startId    = config.startId ;
if( !startId ){
    console.log( "读取不到startid~~~")
    process.exit();
}
// 发送请求
function send( url , proxy ){
    return new Promise( ( resolve , reject ) =>{
        console.log( "proxies      " ,proxy )
        request( {
            url: url,
            proxy: proxy,
            method: 'GET',
            tunnel:false , //解决 请求长时间无反应 并且不报错
            timeout: timeout 
        } , function (err, req , res) {
            if(err){
                reject( err )
            }
            //处理 返回body 为 html 的情况
            if( req &&  JSON.stringify(req.body).indexOf("<") <0 ){
                if( req && JSON.parse(req.body).msg  ){
                    let msg = JSON.parse(req.body).msg ;
                    reject(  msg   ) ;
                }
                else if( res ){
                    let data = JSON.parse(res);
                    if( data ){
                        let datas = data ;
                        for( let item in datas ){
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
    let datas = [];
    let index ;
/*** 
 * 如果不需要分段请求 则把 for() 中的   i<scope  注释掉 
 */
    for( let i= startId  ; i< endId ; i++){
        index = i ;
        try{
            if( proxyIndex < 0){
                proxys = require("./proxys.js");
                proxyIndex = proxys.length-1 ;
            }
            let data = await send( url + i , proxys[ proxyIndex ] ); //请求到的 接口内容
            if( data.douban_id ){
                data.status="0";
                console.log( "正在加入数据库");
                await createDouban( data);
            }
        }catch(err){
            let data = {} ;
            data.douban_id = index;
            console.log("出错~" ,err );
            if( /rate_limit_exceeded2/.test(err) ){
                /***
                 * 如果超出 请求数量 则换ip再次请求
                 */
                data.status="2";
                proxyIndex-- ;
                //如果 报错为 请求次数超限  则 暂停
            }
            else if( /book_not_found/.test(err) ){
                //如果 报错为 请求次数超限  则 退出node 
                data.status="1";
            }else{
                data.status="2";
                proxyIndex-- ;
            }
            await createDouban( data);
        }
        await setCache(   ++index  ,"now" )
        //暂停 n 秒执行
        await helper.sleep( helper.random(3) ) ;
    }
    // if( datas.length!==0  ){
    //     console.log("最后压入")
    //     //在 循环请求完成后， 将 数组中剩余的 但是没有达到50条数据  导入数据库  
    //     await bulkCreateDouban( datas);
    //     console.log("压入成功")
    // }
    // 然后 退出 node 
    await setCache( "正常退出： "+ index  + "\n" , "cache" ) ; 
    process.exit();
})();

// 添加 日志
function setCache( data , type ){
    let name = helper.timeDir( new Date() ,"ymd" ) ;
    if( type =="cache"){
        fs.appendFileSync("./cache/cache"+ name +".txt" , data ,( err )=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        } )
    }else if( type =="now" ){
        config.startId = data;
        fs.writeFileSync("./config.json" , new Buffer(JSON.stringify(config ,["timeout" ,"pauseTime","url","startId","endId"] ,"\t")) , (err)=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        })
    }else if( type =="unknown" ){
        fs.appendFileSync("./unknown/unknown"+name+".txt" , data , (err)=>{
            if( err ){
                console.log( "err  " , err);
            }else{
                console.log(" 设置成功~");
            }
        })
    }
}

    