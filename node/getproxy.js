var request = require("request");
var cheerio = require("cheerio");
const schedule = require('node-schedule');
var fs = require("fs");
var timeout = 60*60 ; //重新获取ip时间
var proxys = [];  //保存从网站上获取到的代理
var useful = [];  //保存检查过有效性的代理


/**
 * 获取www.xicidaili.com提供的免费代理
 */
async function getXici() {
    url = "http://www.xicidaili.com/nn";  // 国内高匿代理
    console.log("proxys        " , 1 )
    await request ({
        url: url,
        method: "GET",
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36'
        } //给个浏览器头，不然网站拒绝访问
    }, async function(error, response, body) {
        if(!error) {
            var $ = cheerio.load(body);
            var trs = $("#ip_list tr");
            for(var i=1;i<trs.length;i++) {
                var proxy = {};
                tr = trs.eq(i);
                tds = tr.children("td");
                proxy['ip'] = tds.eq(1).text();
                proxy['port'] = tds.eq(2).text();
                var speed = tds.eq(6).children("div").attr("title");
                speed = speed.substring(0, speed.length-1);
                var connectTime = tds.eq(7).children("div").attr("title");
                connectTime = connectTime.substring(0, connectTime.length-1);
                if(speed <= 5 && connectTime <= 1) { //用速度和连接时间筛选一轮
                   await proxys.push(proxy);
                }
            }
        }
        await check();
    });
}

/**
 * 过滤无效的代理
 */
async function check() {
    //尝试请求百度的静态资源公共库中的jquery文件
    var url = "http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js";
    var flag = proxys.length;  //检查是否所有异步函数都执行完的标志量
    for(var i=0;i<proxys.length;i++) {
        var proxy = proxys[i];
        await request({
            url: url,
            proxy: "http://" + proxy['ip'] + ":" + proxy['port'],
            method: 'GET',
            timeout: 20000  //20s没有返回则视为代理不行
        }, async function (error, response, body) {
            if(!error) {
                if (response.statusCode == 200) {
                    //这里因为nodejs的异步特性，不能push(proxy),那样会存的都是最后一个
                    !useful.includes( response.request['proxy']['href'] ) &&useful.push(response.request['proxy']['href']);
                    console.log(response.request['proxy']['href'], "useful!");
                } else {
                    console.log(response.request['proxy']['href'], "failed!");
                }
            } else {
                //console.log("One proxy failed!");
            }
            flag--;
            if (flag == 0) {
                await saveProxys();
            }
        });
    }
}

/**
 * 把获取到的有用的代理保存成json文件，以便在别处使用
 */
async function saveProxys() {
    // 有效的 代理ip为空 者 不修改 proxy.js 文件
    if( useful.lenght !== 0){
        await fs.writeFileSync("proxys.js", "module.exports = " +  JSON.stringify(useful) );
        console.log("Save finished!");
    }
    
}
getXici();  //启动这个爬虫
setInterval(  function(){
    proxys=[]; // 清空 之前的判断为有用的 代理ip
    getXici();
}, timeout*1000) ;
    
