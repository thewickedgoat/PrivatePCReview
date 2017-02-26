import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  newUser: User;

  users: User[]

  constructor() {
    this.users = [
      {name: "Ole", age: 12, email: "Retard@live.org", password: "1234"},
      {name: "Frans", age: 32, email: "Retard7@live.org", password: "1234"},
      {name: "Biver", age: 62, email: "Retard2@live.org", password: "1234"},
      {name: "Helmut", age: 13, email: "Retard3@live.org", password: "1234"},
      {name: "Ubruli", age: 23, email: "Retard4@live.org", password: "1234"},
      {name: "IziPizi", age: 99, email: "Retard5@live.org", password: "1234"},
      {name: "Paul", age: 11, email: "Retard6@live.org", password: "1234"},
      ];

      this.newUser = new User();
  }



  ngOnInit() {
  }

  RegisterUser()
  {
    this.users.push(this.newUser);

    this.newUser = new User();
  }

}
