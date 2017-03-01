import { Injectable } from '@angular/core';
import {User} from "./user";

@Injectable()
export class UsersService {

  users: User[];

  constructor() {
  this.users = [{id: '0', name: "Ole", age: 12, email: "Retard@live.org", password: "1234"},
    {id: '1', name: "Frans", age: 32, email: "Retard7@live.org", password: "1234"},
    {id: '2', name: "Biver", age: 62, email: "Retard2@live.org", password: "1234"},
    {id: '3', name: "Helmut", age: 13, email: "Retard3@live.org", password: "1234"},
    {id: '4', name: "Ubruli", age: 23, email: "Retard4@live.org", password: "1234"},
    {id: '5', name: "IziPizi", age: 99, email: "Retard5@live.org", password: "1234"},
    {id: '6', name: "Paul", age: 11, email: "Retard6@live.org", password: "1234"}];
  }

  getUsers(){
   return this.users;
  }

  getUser(user: User){
    return this.users.filter(x => x.id === user.id);
  }

  addUser(user: User){
    this.users.push(user);
  }

  deleteUser(user: User){
    this.users.filter(x => x.id === user.id).pop();
  }

  updateUser(user: User){
    this.users.filter(x => x.id === user.id).pop();
    this.users.push(user);
  }
}
