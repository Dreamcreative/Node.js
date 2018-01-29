var start = (new Date()).getTime();
var db = connect("test");
var arr=[];
// for( let i =0 ;i<1000;i++){
//     db.test.insert({num:1})
// }
// var runTime = (new Date()).getTime() - start;
// print( "循环用时插入  +++ " + runTime +"   ms")

for( let i=0;i<1000 ;i++ ){
    arr.push({num:1})
}
db.test.insert(arr)
var runTime = ( new Date()).valueOf() - start;
print( "批量插入用时 +++ " + runTime + "  ms")