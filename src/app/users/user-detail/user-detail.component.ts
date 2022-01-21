import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from "../IUser";
import {UserService} from "../../services/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {

  logs: any[] = [];
  user?: IUser | null
  constructor(private userService: UserService,
              private router: ActivatedRoute) { }

  ngOnInit(): void {
    // @ts-ignore
    let id = +this.router.snapshot.paramMap.get('id');
    this.user = this.userService.getUserById(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    let namePre = changes['user'].previousValue?.name;
    if (namePre) {
      let nameCurrent = changes['user'].currentValue?.name;
      let message = "click tu " + namePre + " sang " + nameCurrent;
      this.logs.push(message)
    }
  }

}
