import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReviewsComponent } from './reviews/reviews.component';
import {MaterialModule} from "@angular/material";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HomeComponent } from './home/home.component'
import {Routes, RouterModule} from "@angular/router";
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './auth/login/login.component';
import { LoginViewComponent } from './auth/login/login-view.component';

import {UsersService} from "./users/users.service";
import { ReviewService} from "./reviews/review.service";
import {AuthService} from "./auth/auth.service";
import { CreateUserComponent } from './users/create-user/create-user.component';
import { CreateUserViewComponent } from './users/create-user/create-user-view.component';
import { UpdateUserComponent } from './users/update-user/update-user.component';
import { UpdateUserViewComponent } from './users/update-user/update-user-view.component';
import { AngularFireModule, AuthMethods, AuthProviders} from "angularfire2";
import {AuthGuard} from "./auth/auth-guard";
import { UsersViewComponent } from './users/users-view/users-view.component';
import { UsersListComponent } from './users/users-view/users-list.component';
import { ReviewViewComponent } from './reviews/review-view/review-view.component';
import { ReviewListComponent } from './reviews/review-view/review-list.component';


export const firebaseConfig = {
  apiKey: "AIzaSyBZTtLluvg1QZTeu8gvvYI0Wuq4YdnEsCY",
  authDomain: "mrr-rest.firebaseapp.com",
  databaseURL: "https://mrr-rest.firebaseio.com",
  storageBucket: "mrr-rest.appspot.com",
  messagingSenderId: "782483373971"
};

export const firebarebaseLoginConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
}

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'reviews', component: ReviewViewComponent},
  { path: 'users', component: UsersViewComponent},
  { path: 'create-user', component: CreateUserComponent},
  { path: 'users/:$key', component: UpdateUserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ReviewsComponent,
    ToolbarComponent,
    HomeComponent,
    LoginComponent,
    LoginViewComponent,
    CreateUserComponent,
    CreateUserViewComponent,
    UpdateUserComponent,
    UpdateUserViewComponent,
    UsersViewComponent,
    UsersListComponent,
    ReviewViewComponent,
    ReviewListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontawesomeModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(firebaseConfig, firebarebaseLoginConfig)
  ],
  providers: [UsersService, ReviewService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
