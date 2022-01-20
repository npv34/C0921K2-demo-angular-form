import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../IUser";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userClicked?: IUser;
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

  userFilter: IUser [] = []
  displayedColumns: string[] = ['STT', 'Name', 'Email', 'Action'];
  dataSource = new MatTableDataSource<IUser>(this.users);

  constructor() {
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.userFilter = this.users;
  }

  clickUser(id: number) {
    console.log(id)
    let user = this.users.filter(user => {
      return user.id === id
    });

    this.userClicked = user[0];
  }

  search(event: any) {
    let name = event;
    this.userFilter = (name) ? this.getUserByName(name) : this.users
  }

  getUserByName(name: string) {
    return this.users.filter(user => {
      return user.name == name
    })
  }

}
