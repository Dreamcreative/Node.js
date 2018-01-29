/**
 * 引用 Events 模块
 * Events实现了一种观察者模式，其支持了nodejs的核心机制，且http/fs /mongoose等都继承了Events
 * 可以添加监听事件
 * 观察者模式 就是为某一对象添加一监听事件，如on("show" , callback ),由该对象在符合条件如
 * show时自行触发，浏览器本身已经为DOM 实现了监听机制
 *  */
let events = require("events")
/**
 * 创建 eventEmitter对象 
 */
let eventEmitter = new events.EventEmitter();
/**
 * 创建事件处理程序
 */
let connectHandle = () =>{
    console.log( "链接成功")
    /**触发 data_received事件 */
    eventEmitter.emit("data_received");
}
/**绑定connection 事件处理程序 */
eventEmitter.on("connection" ,connectHandle);
/** 使用匿名函数绑定 data_received  事件*/
eventEmitter.on("data_received",()=>{
    console.log("数据接收成功")
})
/**触发connection 事件 */
eventEmitter.emit("connection");
console.log("执行完毕")