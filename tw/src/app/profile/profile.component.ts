import { AuthenticationService ,UserDetails} from './../authentication.service';
import { Component } from '@angular/core';

@Component({
    templateUrl:"profile.component.html"
})
export class ProfileComponent {
    details:UserDetails

    constructor(private auth:AuthenticationService){}

    ngOnInit(){
        this.auth.profile().subscribe(
            user=>{
                this.details=user
            },
            err=>{
                console.log(err)
            }
        )
    }
}