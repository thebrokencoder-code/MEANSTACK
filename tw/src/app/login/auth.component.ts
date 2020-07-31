import { Router } from '@angular/router';
import { AuthenticationService,TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  credentials:TokenPayload ={
    user_id:0,
    user_fname:'',
    user_lname:'',
    user_email:'',
    user_password:''
  }
  constructor(public auth:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }
  login(){
    this.auth.login(this.credentials).subscribe(
      ()=>{
        this.route.navigateByUrl('/tweets')
      },
      err=>{
        console.error(err)
      }
    )
  }
}
