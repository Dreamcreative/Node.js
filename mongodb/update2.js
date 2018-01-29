var workmate3={
    name:'MinJie',
    age:20,
    sex:0,
    job:'UI设计',
    skill:{
        skillOne:'PhotoShop',
        SkillTwo:'UI',
        SkillThree:'Word+Excel+PPT'
    },
    regeditTime:new Date()
}
var db = connect("compony");
/** 插入一个完整的数据  来修改数据 */
db.compony.update({"name":"MinJie"},workmate3)
print("update success")