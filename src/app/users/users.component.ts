import { Component, OnInit } from '@angular/core';
import {User} from './User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[]

  constructor() {
    this.users = [
      {name: "Ole", age: 12, email: "retard@live.org", userName: "A Pnis"},
      {name: "Frans", age: 32, email: "retard1@live.org", userName: "A Pnis1"},
      {name: "Biver", age: 62, email: "retard2@live.org", userName: "A Pnis2"},
      {name: "Helmut", age: 13, email: "retard3@live.org", userName: "A Pnis3"},
      {name: "Ubruli", age: 23, email: "retard4@live.org", userName: "A Pnis4"},
      {name: "IziPizi", age: 99, email: "retard5@live.org", userName: "A Pnis5"},
      {name: "Paul", age: 11, email: "retard6@live.org", userName: "A Pnis6"},
      ];
  }

  ngOnInit() {
  }

}
