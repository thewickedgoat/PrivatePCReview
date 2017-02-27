import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/forms/src/facade/async";
import {UsersService} from "../users/users.service";
import {User} from "../users/user";

@Component({
  selector: 'mrr-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  signInError: string;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  tryLogin(){
    this.tryLoginEmitter.emit(this.user);
}
  constructor(private userService: UsersService) {
    this.user = new User();
  }

  ngOnInit() {
  }

}
