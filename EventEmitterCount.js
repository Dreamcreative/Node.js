/***
 * 引入events 模块
 */
let events = require("events")
/**
 * 创建eventEmitter 对象
 */
let eventEmitter =  new events.EventEmitter();
let listen1 = ()=>{
    console.log("监听器1执行")
}
let listen2 = ()=>{
    console.log("监听器2执行")
}
/**
 * 为eventEmitter对象绑定 listen 事件
 */


// eventEmitter.on("listen" ,listen1)
// eventEmitter.on("listen" ,listen2)

eventEmitter.addListener("listen", listen1)
eventEmitter.addListener("listen", listen2)
/**
 * eventEmitter.on() 与 eventEmitter.addListener()绑定事件没有区别， 且一个事件可以绑定多个回调函数
 * 若事件队列中出现一个为绑定事件 则触发error事件，若为绑定error事件则报错
 */



/**
 * 获得  eventEmitter 监听事件数量
 */
let eventEmitters= require("events").EventEmitter.listenerCount( eventEmitter, "listen")
// let eventEmitters = events.EventEmitter.listenerCount( eventEmitter , "listen" )
console.log( eventEmitters )
eventEmitter.emit("listen");

/**
 * 移除eventEmitter listen2 事件
 */
eventEmitter.removeListener("listen" , listen2 )
console.log( "listen2 不在受监听" )
// eventEmitter.emit("listen")
eventEmitters = require("events").EventEmitter.listenerCount( eventEmitter , "listen" )
console.log( eventEmitters )

/**
 * 继承 EventEmitter
 * 大多数时候我们不会直接使用EventEmitter ，而是在对象中继承它， 包括 fs http / net 在内的， 
 * 只要上市支持事件响应的核心模块都是  EventEmitter 的子类
 * 为什么 不直接使用 EventEmitter 
 * 1.具有摸个实体功能的对象实现事件符合语义， 事件的监听和发生应该是一个对象的方法
 * 2.javascript的对象机制是基于原型的， 支持部分多重继承，继承EventEmitter不会打乱对象原有的继承关系
 *  */


