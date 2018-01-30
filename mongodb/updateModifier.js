var  db= connect("compony")
/** $set 修改器 */
// db.compony.update({"name":"MinJie"},{"$set":{"age":88}})

/** 修改 嵌套内容  */
// db.compony.update({"name":"MinJie"},{"$set":{"skill.SkillThree":"Word + PPT"}})

/** 删除内容  只需要写 key 就行了*/
// db.compony.update({"name":"MinJie"},{"$unset":{"skill.SkillThree":""}})

/** $inc  对数字进行计算 ,只对Number 类型有效 ， 对字符串无效*/
// db.compony.update({"name":"MinJie"},{"$inc":{"age":-10}})

/** multi 选项 
 * 为所以数据 插入一个新的内容 
 * db.compony.update({},{ "$set":{"interst":[1] }}) 这样只能在 第一条数据添加 ，后续数据不会添加内容
 * db.compony.update({},{ "$set":{"interst":[1]}} ,{ multi :true}) 会给所以数据添加内容
 * multi是有ture和false两个值，true代表全部修改，false代表只修改一个（默认值）
*/
// db.compony.update({},{ "$set":{"interst":[1]}} ,{ multi :true})
// db.compony.update({},{ "$unset":{"interst":[1]}} ,{ multi :true})

/** upsert 选项 
 *  upsert 是在找不到值得情况下，直接插入这条数据，
 *  upsert 有2个值 ， true 表示没有就添加，false表示没有不添加（默认值）
 */
// db.compony.update({"name":"xiaowang"},{"age":110},{upsert:true})
print("update success !")