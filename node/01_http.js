var http = require("http");
http.createServer( ( req , res )=>{
    console.log( 111111 )
    res.writeHead( 200,{
        "Content-Type":"text/html'charset=UTF-8",
    });
    res.write("ssssssssffffffff sssss");
    res.end();
}).listen(8099 ,"127.168.31.139");