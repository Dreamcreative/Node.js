/**
 * node.js 核心模块  util  ，它提供常用函数的集合，用于弥补核心javascript的功能过于精简的不足
 * 
 * util.inherits( constructor , superConstructor ) 是一个实现对象间原型继承的函数
 * util.inherits() 只能继承对象 原型链上的属性， 而不能继承 构造函数自己内部定义的属性
 */
const util = require("util");
// function Base(){
//     this.name = "base"
//     this.base = 1991
//     this.sayHello = function(){
//         console.log( "hello " +this.name)
//     }
// }
// Base.prototype.showName = function(){
//     console.log( this.name )
// }
// function Sub(){
//     this.name = "sub"
// }
// util.inherits(Sub , Base )
// let objBase = new Base()
// objBase.showName();
// objBase.sayHello()
// console.log( objBase )
// let objSub = new Sub()
// objSub.showName()
// // objSub.sayHello()  // 报错 sayHello() 定义在Base 构造函数的内部，无法被 util.inherits() 继承
// console.log( objSub) 

/**
 * util.inspect( object, [ showHidden ] ,[depth],[colorss]) 
 * 是一个将任意对象转化为字符串的方法， 通常用于调试和错误输出 ，至少接受一个参数Object ，即要转换的对象
 * showHidden 是一个可选参数，如果为 true ，将会输出更多隐藏信息
 * depth 表示最大递归的成熟，如果对象很复杂，可以指定层数以控制输出信息的多少，如果不指定depth ，默认递归为 2 
 * 
 */
function Person(){
    this.name = "sssss"
    this.toString = function(){
        return this.name 
    }
}
let obj = new Person()
console.log( util.inspect( obj ))
console.log( util.inspect( obj , true))

/**
 * util.isArray( obj ) 
 * 如果 参数 obj 是一个数组， 返回true ， 否则返回false
 */

/**
 * util.isRegExp( obj )
 * 如果参数 obj 是一个正则表达式 。 返回 true， 否则返回false
 */

/**
 * util.isDate( obj )
 * 如果 参数 obj 是一个日期 ，返回true  ，否则 返回 false
 */

/**
 * util.isError( obj )
 * 如果 参数 obj 是一个 错误对象 ，返回true ，否则 返回 false
 */