import { AuthenticationService } from './authentication.service';
import { Router ,CanActivate} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(private auth:AuthenticationService,private router:Router){}
    canActivate(){
        if(!this.auth.isLoggedIn()){
            this.router.navigateByUrl('/')
            return false
        }
        return true
    }
}