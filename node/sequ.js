const Sequelize = require("sequelize");
const sequelize = new Sequelize("postgres","postgres","123456" ,{
    host:"localhost",
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
const douban = sequelize.define("newdouban" , {
    rating:{
        type:Sequelize.JSON 
    },
    subtitle :{
        type:Sequelize.STRING
    },
    author :{
        type:Sequelize.ARRAY(Sequelize.STRING )
    },
    pubdate :{
        type:Sequelize.STRING
    },
    tags :{
        type:Sequelize.JSON
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
        type:Sequelize.JSON
    },
    catalog :{
        type:Sequelize.TEXT
    },
    pages :{
        type:Sequelize.STRING
    },
    images :{
        type:Sequelize.JSON
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
        type:Sequelize.TEXT,
    },
    price :{
        type:Sequelize.STRING,
    },
    status:{
        type:Sequelize.ENUM( ),
        values: ['0', '1', '2'],
        comment:"0 成功 ,1 book_not_found , 2 network_wrong",
    }
})



exports.createDouban = function createDouban(  data ){
    douban.sync({force:false }).then( ()=>{
        console.log("添加成功~")
        return douban.create( data ) ;
    })
}
exports.bulkCreateDouban = function createDouban(  data ){
    douban.sync({force:false }).then( ()=>{
        console.log("添加成功~")
        return douban.bulkCreate( data ) ;
    })
}