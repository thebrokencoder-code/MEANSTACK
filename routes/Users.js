const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User.js');
users.use(cors());


process.env.SECRET_KEY ="secret";
users.get('/', function (req, res) {
    res.render('index', {});
  });
//new REGISTRATION
users.post('/register',(req,res)=>{
    const date= new Date();
    const userData={
        user_fname : req.body.user_fname,
        user_lname : req.body.user_lname,
        user_email : req.body.user_email,
        user_password: req.body.user_password,
        created:date
    }

    User.findOne({
        where:{
            user_email:req.body.user_email
        }
    })
    .then(user=> {
        if(!user){
            const hash = bcrypt.hashSync(userData.user_password,10);
            userData.user_password=hash;
            User.create(userData)
            .then(user=>{
                let token =jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                    expiresIn:1440
                })
                res.json({token:token})
            })
            .catch(err=>{
                res.send('error:'+err)
            })
        }
        else{
            res.json({err:"user already exists"})
        }
    })
    .catch(err=>{
                res.send('error:'+err)
            })
});

users.post('/login',(req,res)=>{
    User.findOne({
        where:{
            user_email: req.body.user_email
        }
    })
    .then(user=>{
        if(bcrypt.compareSync(req.body.user_password,user.user_password)){
            let token =jwt.sign(user.dataValues,process.env.SECRET_KEY,{
                expiresIn : 1440
                
            })
            console.log('found');
            res.json({token:token})
        }
        else{
            console.log('not found')
            res.send('user does not exist')
        }
    })
    .catch(err=>{
        res.send('error:'+err)
    })
})

users.get('/profile',(req,res)=>{
    var decoded =jwt.verify(req.headers['authorization'],process.env.SECRET_KEY)
    User.findOne({
        where:{
            user_id:decoded.user_id
        }
    })
    .then(user=>{
        if(user){
            res.json(user)
        }
        else{
            res.send('user does not exist')
        }
    })

    .catch(err=>{
        res.send("error"+err)
    })

})
module.exports = users;