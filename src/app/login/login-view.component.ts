import {Component, OnInit, Input, Output} from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

@Component({
  selector: 'mrr-login-view',
  templateUrl: 'login-view.component.html',
  styleUrls: ['login-view.component.css']
})
export class LoginViewComponent implements OnInit {

  @Input()
  user : any;

  @Input()
  signInError : string;

  @Output('login')
  tryLoginEmitter = new EventEmitter();

  tryLogin()
  {
    this.tryLoginEmitter.emit(this.user);
  }
  constructor() { }

  ngOnInit() {
  }

}
