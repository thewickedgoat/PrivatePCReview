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
      {name: "Ole", age: 12, email: "retard@live.org"},
      {name: "Frans", age: 32, email: "retard7@live.org"},
      {name: "Biver", age: 62, email: "retard2@live.org"},
      {name: "Helmut", age: 13, email: "retard3@live.org"},
      {name: "Ubruli", age: 23, email: "retard4@live.org"},
      {name: "IziPizi", age: 99, email: "retard5@live.org"},
      {name: "Paul", age: 11, email: "retard6@live.org"},
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
