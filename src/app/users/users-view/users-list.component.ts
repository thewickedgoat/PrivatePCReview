import {Component, OnInit, Input, Output} from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {EventEmitter} from "@angular/forms/src/facade/async";
import {UsersService} from "../users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'mrr-users-list',
  templateUrl: 'users-list.component.html',
  styleUrls: ['users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input()
  users: Observable<User[]>

  @Output()
  create = new EventEmitter();

  constructor(private userService: UsersService, private router: Router) {
    this.users = userService.getUsers();
  }



  ngOnInit() {
  }

  createUser()
  {
    //dumb
    this.create.emit();
    //smart
    this.router.navigate(['/users/create-user']);
  }


  deleteUser(user: User)
  {
    this.userService.deleteUser(user);
  }

  updateUser(user: User)
  {
    this.router.navigate(["/users/" + user.$key])
  }

}
