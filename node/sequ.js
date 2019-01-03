const Sequelize = require("sequelize");
// const sequelize = new Sequelize("node","root","123456" ,{
//     host:"localhost",
//     dialect:"mysql",
//     operatorsAliases:false , 
//     pool:{
//         max:5,
//         min:0 ,
//         acquire:30000,
//         idle:10000,
//     }
// }) ;
const sequelize = new Sequelize("douban","douban","douban" ,{
    host:"dev.guaishoubobo.com",
    dialect:"postgres",
    operatorsAliases:false , 
    pool:{
        max:5,
        min:0 ,
        acquire:30000,
        idle:10000,
    }
}) ;

sequelize.authenticate().then(()=>{
    console.log( "Connection has been established successfully");
}).catch(err=>{
    console.error( "Unable to connect to the database:" , err )
})

// 添加 douban 数据库 sequelize 如果存在，则添加数据，
// 不存在 则新增 表
const douban = sequelize.define("douban" , {
    rating:{
        type:Sequelize.STRING
    },
    subtitle :{
        type:Sequelize.STRING
    },
    author :{
        type:Sequelize.STRING
    },
    pubdate :{
        type:Sequelize.STRING
    },
    tags :{
        type:Sequelize.TEXT
    },
    origin_title :{
        type:Sequelize.STRING
    },
    image :{
        type:Sequelize.STRING
    },
    binding :{
        type:Sequelize.STRING
    },
    translator :{
        type:Sequelize.STRING
    },
    catalog :{
        type:Sequelize.TEXT
    },
    pages :{
        type:Sequelize.STRING
    },
    images :{
        type:Sequelize.TEXT
    },
    alt :{
        type:Sequelize.STRING
    },
    douban_id :{
        type:Sequelize.STRING
    },
    publisher :{
        type:Sequelize.STRING
    },
    isbn10 :{
        type:Sequelize.STRING
    },
    isbn13 :{
        type:Sequelize.STRING
    },
    title :{
        type:Sequelize.STRING
    },
    url :{
        type:Sequelize.TEXT
    },
    alt_title :{
        type:Sequelize.STRING
    },
    author_intro :{
        type:Sequelize.TEXT
    },
    summary :{
        type:Sequelize.TEXT
    },
    price :{
        type:Sequelize.STRING
    },
})

exports.createDouban =async function createDouban(  data ){
    await douban.sync({force:false }).then( ()=>{
        console.log("添加成功~")
        return douban.create( data ) ;
    })
}
exports.bulkCreateDouban =async function createDouban(  data ){
    await douban.sync({force:false }).then( ()=>{
        console.log("添加成功~")
        return douban.bulkCreate( data ) ;
    })
}