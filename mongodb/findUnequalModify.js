// var workmate1={
//     name:'JSPang',
//     age:33,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate2={
//     name:'ShengLei',
//     age:31,
//     sex:1,
//     job:'JAVA后端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'J2EE',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate3={
//     name:'MinJie',
//     age:18,
//     sex:0,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate4={
//     name:'XiaoWang',
//     age:25,
//     sex:1,
//     job:'UI',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'UI',
//         skillThree:'PPT'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate5={
//     name:'LiangPeng',
//     age:28,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate6={
//     name:'HouFei',
//     age:25,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate7={
//     name:'LiuYan',
//     age:35,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate8={
//     name:'DingLu',
//     age:20,
//     sex:0,
//     job:'美工',
//     skill:{
//         skillOne:'PhotoShop',
//         skillTwo:'CAD',
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate9={
//     name:'JiaPeng',
//     age:29,
//     sex:1,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
// var workmate10={
//     name:'LiJia',
//     age:26,
//     sex:0,
//     job:'前端',
//     skill:{
//         skillOne:'HTML+CSS',
//         skillTwo:'JavaScript',
//         skillThree:'PHP'
//     },
//     regeditTime:new Date(),
//     interest:[]
// }
var db = connect("compony")
// var workmateArray=[workmate1,workmate2,workmate3,workmate4,workmate5,workmate6,workmate7,workmate8,workmate9,workmate10];
// var resultMessage = db.runCommand({getLastError:1})
// db.workmate.insert( workmateArray )

/***
 * 在终端输入
 * 
 * find 的不等修饰符
 * 小于($lt) : less-than
 * 小于等于($lte) :less-than-equal
 * 大于（$gt）: greater-than
 * 大于等于($gte) : greater-than-equal
 * 不等于（ne）: not-equal
 */
db.workmate.find({"skill.skillOne":"HTML+CSS"} , {name:true ,"skill.skillOne":true})
db.workmate.find( {age:{$lte:30 ,$gte:25 }},{name:true ,age:true ,"skill.skillOne":true ,_id:true})
var start = new Date("01/01/2018")
db.workmate.find( {regeditTime :{ $gt:start }},{ name:true ,age:true ,"skill.skillOne":true , _id:false})


// printjson( resultMessage)
