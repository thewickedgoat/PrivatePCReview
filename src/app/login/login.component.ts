import {Component, OnInit, Input} from '@angular/core';
import {User} from "../users/user";
import { Router } from '@angular/router';
import {UsersService} from "../users/users.service";

@Component({
  selector: 'mrr-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginError: string;
  users: User[];

  constructor(private router : Router, private userService: UsersService) {
      this.users = userService.getUsers();
  }

  login(user){
    let userAccepted = this.users
      .filter(x => x.email === user.email)
      .filter(y => y.password === user.password);
    if(userAccepted && userAccepted.length === 1)
    {
      this.loginError=null;
      this.router.navigate(['/']).then(() => {
        console.log('Login successful');
      });

    }
    else {
      this.loginError = 'not correct email or password';
    }
  }

  ngOnInit() {
  }

}
