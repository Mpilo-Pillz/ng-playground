import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent implements OnInit {
  isLoggedIn = false;
  data: string | undefined;
  user: {
    name: string;
    password: string;
  };
  constructor(
    private userService: UserService,
    private dataService: DataService
  ) {
    this.user = this.userService.user;
  }

  ngOnInit(): void {
    this.dataService.getDetails().then((data: string) => (this.data = data));
  }
}
