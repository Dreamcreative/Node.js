

/**
 * events 模块只提供一个对象， events.EventEmitter, EventEmitter 的核心就是事件触发
 * 与事件监听器功能的封装
 * 可以通过  require("events") 来访问模块
 * 
 */


// let evnets = require("events")
// let eventEmitter = new events.EventEmitter() 

/**
 * 引入events模块 的EventEmitter 对象
 */
// var eventEmitter = require("events").EventEmitter;
// /**
//  * 创建event 对象
//  */
// var event = new eventEmitter();
// /** 给 event绑定 some_envent 事件 */
// event.on("some_event" ,()=>{
//     console.log( "some_event 触发")
// })
// /**
//  * 1s后 为event 对象触发 some_event 事件
//  */
// setTimeout(()=>{
//     event.emit("some_event")
// } , 1000)

/**
 * EventEmitter 的每个事件由一个事件名和若干个参数组成，事件名是一个字符串，通常表达一定的语义
 * 对于每个事件，EventEmitter 支持若干个事件监听器
 * 当事件触发是，注册到这个事件的时间监听器被一次调用，事件参数作为回调函数参数传递
 */


/**
 * EventEmitter 为事件some 注册了两个事件监听器，然后触发了some 事件运行结果中可以看到俩个事件监听器回调函数
 * 被先后调用， 
 * EventEmitter 提供了多个属性， 如on 和 emit  .on函数用于绑定事件函数，emit 属性用于触发一个事件
 * 
 */
let events = require("events")
let eventEmitter = new events.EventEmitter();
eventEmitter.on("some" ,( arg1 ,arg2)=>{
    console.log( "l1" ,arg1 ,arg2)
})
eventEmitter.on("some" ,( arg1 ,arg2)=>{
    console.log( "l2" ,arg1 ,arg2)
})
eventEmitter.emit("some" ,"arg1参数" ,"arg2参数")