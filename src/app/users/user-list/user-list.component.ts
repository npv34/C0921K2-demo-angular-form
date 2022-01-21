import {Component, OnInit, ViewChild} from '@angular/core';
import {IUser} from "../IUser";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userClicked?: IUser;
  users: IUser[] = [];
  userFilter: IUser [] = []
  displayedColumns: string[] = ['STT', 'Name', 'Email', 'Action'];
  dataSource = new MatTableDataSource<IUser>(this.userService.getAll());

  constructor(private userService: UserService) {
  }

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  ngAfterViewInit() {
    // @ts-ignore
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.users = this.userService.getAll();
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
