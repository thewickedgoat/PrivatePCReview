import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MdSnackBar} from '@angular/material';

@Component({
  selector: 'mrr-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginError : string;
  constructor(public loginValidationBar: MdSnackBar, private router : Router) {
  }

  login(user){
    let userAccpepted = users
      .filter(x=> x.email === user.email)
      .filter(x=> x.password === user.password);

    if(userAccpepted && userAccpepted.length === 1)
    {
      this.loginError = null;
      this.router.navigate(['/']).then(() => {
        this.loginValidationBar.open("You are logged in", "Ok", {
          duration: 3000,
        });
      });
    }
    else {
      this.loginError = "email or password was wrong"
    }
  }

  ngOnInit() {
  }

}
