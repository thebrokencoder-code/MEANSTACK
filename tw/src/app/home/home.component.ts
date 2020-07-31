import { AuthenticationService ,UserDetails} from './../authentication.service';
import { Component } from '@angular/core';

@Component({
    templateUrl:"home.component.html"
})
export class HomeComponent {
    details:UserDetails

    constructor(private auth:AuthenticationService){}

    
}