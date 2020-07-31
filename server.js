const express= require('express');
const cors = require('cors');//cross originating request managing library
const bodyP=require('body-parser');
const path=require('path');
//const mysql=require('mysql');



const app=express();
const port =process.env.PORT||3000;

app.use(bodyP.json());
app.use(cors());

//parsing text to urlencoded data
app.use(bodyP.urlencoded({extended:false}));


var Users =require('./routes/Users');
var Tweets =require('./routes/Tweets');
app.use('/users',Users);
app.use('/users',Tweets);



// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'nodedb' //fourth object is the dtabase name dont use while creating a new one
// });
// //connecting now
// db.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     else{
//         console.log('connected');
//     }
// });





// app.get('/addtweet',(req,res)=>{
//     let tweet={ 
//         title:'tweet1', 
//         content:'This is a test tweet'
//     };
//     let sql="INSERT INTO tweet SET ?";
//     let query =db.query(sql,tweet,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send("tweet added");
//     });
// });

// //Retrieve All Tweets
// app.get('/gettweets',(req,res)=>{

//     let sql="SELECT * FROM tweet";
//     let query =db.query(sql,(err,results)=>{
//         if(err) throw err;
//         console.log(results);
//         res.send("tweets");
//     });
// });


// //Retrieve Single tweet
// app.get('/gettweet/:id',(req,res)=>{

//     let sql=`SELECT * FROM tweet WHERE id=${req.params.id}`;
//     let query =db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send("tweet");
//     });
// });
// //update tweet
// app.get('/edittweet/:id',(req,res)=>{
//     let udata="newtweet";
//     let sql=`UPDATE tweet SET title= '${udata}' WHERE id=${req.params.id}`;
//     let query =db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send("tweet updated");
//     });
// });
// //delete tweet
// app.get('/deletetweet/:id',(req,res)=>{

//     let sql=`DELETE FROM tweet WHERE id=${req.params.id}`;
//     let query =db.query(sql,(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send("tweet deleted");
//     });
// });




// //connecting to angular folder
// app.use(express.static(path.join(__dirname,'dist/tw')));


// //letting server know about routing
// //navigaating into routes of angular components
// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'tw/dist/tw/index.html'));
// });
app.listen(port,()=>console.log("server running"+port));