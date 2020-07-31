import {TweetService} from './tweets.service';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule, MatIcon} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatRippleModule} from '@angular/material/core'; 
import { Component } from '@angular/core';
//angular default components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatListModule} from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

//project build components
import { AuthComponent } from './login/auth.component';
import { TweetsComponent } from './tweets/tweets.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:AuthComponent},
  {path:'tweets',component:TweetsComponent,canActivate:[AuthGuardService]},
  {path:'login',component:AuthComponent},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
  {path:'register',component:RegisterComponent},
];




@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    TweetsComponent,
    ProfileComponent,
    HomeComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    NgbModule,
    MatRippleModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatBottomSheetModule
  ],
  providers: [AuthenticationService,AuthGuardService,TweetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
