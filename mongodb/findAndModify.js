/***
 * 在操作数据库是， 对数据的修改是需要有足够的安全措施， 在实际工作中，我们用db.collections.update的时候不多
 * 在修改时，我们都会用findAndModify ，它可以给我们返回来一些必要的参数，让我们队修改多了很多控制力
 * 控制力加强也就是对安全的情话能力加强了
 * 
 */

/** db.runCommand() 
 * 它是数据库运行命令的执行器，执行命令首选就是它，因为它在shell和驱动程序间提供了一致的接口。
*/
var db = connect("compony");
// db.workmate.update({sex:1} , {$set :{money :1000 }} ,{ upsert:false /**没有就不添加 默认false */ ,multi:true })
// var resultMessage = db.runCommand( {getLastError : 1 })
// printjson( resultMessage )


var myModify = {
    findAndModify:"workmate",  
    query:{"name":"JSPang"}, //需要查询的条件/ 文档
    update:{$set :{"age":18}}, // 需要更新的字段
    new :true  //boolean 值， 需要查看结果， 如果 false 不查看结果
}
var resultMessage = db.runCommand(myModify); // db.runCommand() 查看执行结果
printjson( resultMessage )
