import { Injectable } from '@angular/core';
import {IUser} from "../users/IUser";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: IUser[] = [
    {
      id: 1,
      name: "hiep",
      email: "hiep@gmail.com",
      phone: "0090909",
      address: "HN"
    },
    {
      id: 2,
      name: "phong",
      email: "phong@gmail.com",
      phone: "0090909",
      address: "HN"
    },
    {
      id: 3,
      name: "ha",
      email: "ha@gmail.com",
      phone: "0090909",
      address: "HN"
    }
  ];
  constructor() { }

  getAll()  {
    return this.users;
  }

  getUserById(id: number) {
    for (const user of this.users) {
        if (user.id == id) {
          return user;
        }
    }

    return null;
  }
}
