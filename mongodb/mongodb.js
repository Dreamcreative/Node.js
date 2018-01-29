const MongoClient = require("mongodb").MongoClient
const url = "mongodb://localhost:27011/mydb";
MongoClient.connect( url , function( err , db){
    if(err){ throw err }
    console.log("数据库已建立")
    db.close()
})