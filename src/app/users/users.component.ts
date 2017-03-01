import { Component, OnInit } from '@angular/core';
import {User} from './User';
import {forEach} from "@angular/router/src/utils/collection";
import {UsersService} from "./users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  newUser: User;

  users: User[];

  constructor(private userService: UsersService) {

      this.users = userService.getUsers();
      this.newUser = new User();
  }

  ngOnInit() {
  }

  registerUser()
  {
    this.userService.addUser(this.newUser);
  }

}
