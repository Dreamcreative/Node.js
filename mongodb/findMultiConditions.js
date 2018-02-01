/** 
 * find 的多条件查询 
 */

var db = connect("compony")
/** $in 修饰符 
 * 查询数据中 年龄 为25和33 的信息
 */
// db.workmate.find( { age:{$in:[25,33]}}, { name:true ,age:true ,_id:false}) 
/** 
 * $or 修饰符
 * 查询数据中多个键值得情况 
 * 满足一个条件 就会输出这个数据
 */
/**  */
db.workmate.find( { $or:[ {age:{$gte:30} },{"skill.skillThree":"PHP"}] } ,{name:1,"skill.skillThree":1,age:1,_id:0})

// db.workmate.find({$or:[{age:{$gte:30}},{"skill.skillThree":'PHP'}]},{name:1,age:1,_id:0})

/** $not 修饰符 
 *  用来查询除条件之外的值， 不能用在条件语句中，只能在外边进行查询使用
*/
db.workmate.find( { age:{$not :{ $gte: 25 ,$lte:30}}} , {name:1,"skill.skillOne":1,age:1,_id:0})