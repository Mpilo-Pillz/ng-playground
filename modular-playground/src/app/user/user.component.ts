import { Component } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  isLoggedIn = false;
  user: {
    name: string;
    password: string;
  };
  constructor(private userService: UserService) {
    this.user = this.userService.user;
  }
}
