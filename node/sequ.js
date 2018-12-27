const Sequelize = require("sequelize");
const sequelize = new Sequelize("node","root","123456" ,{
    host:"localhost",
    dialect:"mysql",
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
        type:Sequelize.STRING
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

exports.createDouban = function createDouban(  data ){
    douban.sync({force:false }).then( ()=>{
        console.log("添加成功~")
        return douban.bulkCreate( data ) ;
    })
}