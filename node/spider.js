const { createDouban } = require("./sequ");
const request = require("request");
let url = "https://api.douban.com/v2/book/";
let id = 30302290 ;
// 发送请求
function send( url ){
    return new Promise( ( resolve , reject ) =>{
        request( url ,( err, req , res )=>{
            let msg = JSON.parse(req.body).msg;
            if(err){
                reject( err )
            }
            if( msg ){
                reject(  msg ) ;
            }else{
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
            }
        })
    })
}
// 异步执行 执行函数 ，不阻滞 后续函数执行
( async()=>{
    console.log( "start ");
    let datas = [];
    for( let i= id  ; i<id+100 ; i++){
        try{
            let data = await send( url +i); //请求到的 接口内容
            if( data.douban_id ){
                datas.push( data );
                // console.log( datas )
                // console.log( "正在加入数据库");
                // await createDouban( data);
            }
            if( datas.length > 50 ){
                console.log( "正在加入数据库");
                await createDouban( datas); //将大于50条的数据批量压入数据库
                datas=[] ;
            }
        }catch(err){
            console.error("出错~" ,err );
            if( /rate_limit_exceeded2/.test(err) ){
                //如果 报错为 请求次数超限  则 退出node 
                process.exit();
            }
        }
        //暂停 3秒执行
        await sleep( 3 ) ;
    }
    console.log( "end ");
    //在 循环请求完成后， 将 数组中剩余的 但是没有达到50条数据  导入数据库  
    await createDouban( datas);
    // 然后 退出 node 
    process.exit();
})();


// 暂停执行
function sleep( sec ){
    var now = new Date();
    var exitTime = now.getTime() + sec*1000 ;
    while( true ){
        now = new Date();
        if( now.getTime() > exitTime) return ;
    }
}


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
