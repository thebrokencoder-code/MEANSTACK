const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.seq.define(
    'tweet',
    {
        id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        title:{
            type:Sequelize.STRING
        },
        content:{
            type:Sequelize.STRING
        }

    },

    {
        timestamps:false,//sequeslize defaults timestamps ,
        freezeTableName:true, //SERIOUSLY IMPORTANT WHILE USING SEQUELISE it prevents automatic table name assignment
        tableName:'tweet'
    }
)