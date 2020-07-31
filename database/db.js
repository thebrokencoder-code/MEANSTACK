const Sequelize =require('sequelize');
const db={};

const seq= new Sequelize("nodedb","root","",{
    host:"localhost",
    dialect:"mysql",
    

    pool:{
        max:5,
        min:0,
        acquire:3000,
        idle:10000,
    }
});

db.seq=seq;
db.Sequelize=Sequelize;
module.exports=db;