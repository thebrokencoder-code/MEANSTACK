import { Router } from '@angular/router';
import { AuthenticationService,TokenPayload } from './../authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  credentials:TokenPayload ={
    user_id:0,
    user_fname:'',
    user_lname:'',
    user_email:'',
    user_password:''
  }
  constructor(private auth:AuthenticationService,private route:Router) { }

  ngOnInit(): void {
  }
  register(){
    this.auth.register(this.credentials).subscribe(
      ()=>{
        this.route.navigateByUrl('/tweets')
      },
      err=>{
        console.error(err)
      }
    )
  }
}
