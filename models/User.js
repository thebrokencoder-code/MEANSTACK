const Sequelize = require('sequelize');
const db = require('../database/db.js');

module.exports = db.seq.define(
    'user',
    {
        user_id:{
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },

        user_fname:{
            type:Sequelize.STRING
        },
        user_lname:{
            type:Sequelize.STRING
        },
        user_email:{
            type:Sequelize.STRING
        },
        user_password:{
            type:Sequelize.STRING
        },
        created:{
            type:Sequelize.DATE,
            defaultValue:Sequelize.NOW
        }

    },

    {
        timestamps:false,//sequeslize defaults timestamps ,
        freezeTableName:true, //SERIOUSLY IMPORTANT WHILE USING SEQUELISE it prevents automatic table name assignment
        tableName:'user'
    }
)