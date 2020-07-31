
import { Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import {Router} from '@angular/router';

export interface TweetDetails{
  
    id:number
    title:string
    content:string
    
}
interface TokenResponse{
  token:string
}
export interface TokenTweetPayload{
  id:number
  title:string
  content:string
}
@Injectable(
  {
    providedIn:'root'
  }
)
export class TweetService {
  private token :string
  constructor(private http:HttpClient,private router:Router) { }

  private saveToken(token:string):void{
    localStorage.setItem('userToken',token)
    this.token=token
  }
  private getToken():string{
    if(!this.token){
      this.token=localStorage.getItem('userToken')
    }
    return this.token
  }
  public getUserDetails():TweetDetails{
    const token=this.getToken();
    let payload
    if(token){
      payload=token.split('.')[1]
      payload=window.atob(payload)
      return JSON.parse(payload)
    }
    else{
      return null
    }
  }
  public getTweetDetails():TweetDetails{
    const token=this.getToken();
    let payload
    if(token){
      payload=token.split('.')[1]
      payload=window.atob(payload)
      return JSON.parse(payload)
    }
    else{
      return null
    }
  }

  public addTweet(user:TokenTweetPayload):Observable<any>{
    const base =this.http.post("/users/addtweet",user)

    const request =base.pipe(
      map((data:TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token)
          
        }
        return data
      })
    )
    return request
  }
  public gettweets():Observable<any>{
    return this.http.get("/users/gettweets",{
      headers:{Authorization:`${this.getToken()}`}
    })
  }
  public logout():void{
    this.token='null';
    window.localStorage.removeItem('userToken');
    this.router.navigateByUrl('/');
  }



}
