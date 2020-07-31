const express = require('express');
const tweets = express.Router();

const cors = require('cors');
const Tweet = require('../models/Tweet.js');

const jwt = require('jsonwebtoken');

process.env.SECRET_KEY ="secret";
tweets.use(cors());
tweets.post('/addtweet',(req,res)=>{
  const tweetData={
        title : req.body.title,
        content : req.body.content
    }
    Tweet.create(tweetData).then(console.log('tweeted'))
});
tweets.get('/gettweets',(req,res)=>{
  Tweet.findAll({
    attributes:['title','content'],
   
  }
  )
  .then(tweet=>{
      if(tweet){
        
          //tweet=JSON.stringify(tweet)
          res.send(tweet)
          console.log(tweet)
          
      }
      else{
          res.send('user does not exist')
      }
  })

  .catch(err=>{
      res.send("error"+err)
  })

})
module.exports = tweets;