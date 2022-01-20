import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {IUser} from "../IUser";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit, OnChanges {

  logs: any[] = [];
  @Input() user?: IUser
  constructor() { }

  ngOnInit(): void {
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
