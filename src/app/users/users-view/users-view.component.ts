import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {UsersService} from "../users.service";

@Component({
  selector: 'mrr-users-view',
  templateUrl: './users-view.component.html',
})
export class UsersViewComponent implements OnInit {

  users: Observable<User[]>

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

}
