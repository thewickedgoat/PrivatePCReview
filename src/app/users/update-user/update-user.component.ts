import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {Router, ActivatedRoute} from "@angular/router";
import {UsersService} from "../users.service";
import {Observable} from "rxjs";

@Component({
  selector: 'mrr-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user:  Observable<User>;

  constructor(private route : ActivatedRoute, private userService: UsersService) {

  }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.user = this.userService.getUser(params['$key']);
    });

  }

  updateUser(user: User)
  {
    this.userService.updateUser(user);
  }


}
