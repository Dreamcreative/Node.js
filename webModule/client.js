const http = require("http")
let options = {
    host :"localhost",
    port:"8888",
    path:"/index.html"
}
let callback = function(res){
    let body= ""
    res.on("data",(data)=>{
        body+=data
    })
    res.on( "end" ,()=>{
        console.log( body )
    })
}
let req = http.request( options , callback)
req.end();