var userName = "maxiao";
/** 生成时间戳 */
// var timeStamp = Date.parse( new Date());
// var timeStamp = ( new Date()).valueOf();
var timeStamp =(new Date()).getTime();
var jsonDatabase = {"loginName": userName ,"loginTime":timeStamp};
var db = connect("log") // 相当于  在 cmd 中使用 use log 
db.log.insert( jsonDatabase )
print("log print success")