var url = require("url");
var http = require("http");

http.createServer(( req , res )=>{
    if( req.url != "/favicon.ico"){
        console.log( req.url ) ;
        var result = url.parse( req.url , true );
        console.log( "result " ,result )
    }
    res.writeHeader(200,{
        "Content-Type":"text/html;charset=UTF-8",
    });
    res.write("222222222222222");
    res.end();
}).listen( 3000 );

