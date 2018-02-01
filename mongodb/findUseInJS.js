var db = connect("compony");
var result = db.workmate.find();
result.forEach( (result )=>{
    printjson(result)
})