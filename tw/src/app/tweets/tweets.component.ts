import { AuthenticationService ,UserDetails} from './../authentication.service';
import { ProfileComponent } from './../profile/profile.component';
import { Router } from '@angular/router';
import { TweetService, TokenTweetPayload, TweetDetails } from './../tweets.service';
import { Component, SkipSelf} from '@angular/core';



@Component({
  selector: 'tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent{
  tweetdetails:any
  details:UserDetails
  tweets:TokenTweetPayload ={
    id:0,
    title:'',
    content:''
  }
  constructor(public tweet:TweetService,private route:Router,public auth:AuthenticationService){}
  ngOnChanges(){
    
  }
  
  
  
  ngOnInit(){
   
    this.auth.profile().subscribe(
      user=>{
          this.details=user
      },
      err=>{
          console.log(err)
      }
  )

  this.tweet.gettweets().subscribe(
    tweets=>{
        this.tweetdetails=tweets
    },
    err=>{
        console.log(err)
    }
  )
  
  

}
addtweet(){
  this.tweet.addTweet(this.tweets).subscribe(
    ()=>{
      this.route.navigateByUrl('/tweets')
    },
    err=>{
      console.error(err)
    }
  )
}

viewprofile(){
  this.route.navigateByUrl('/profile')
}
}
