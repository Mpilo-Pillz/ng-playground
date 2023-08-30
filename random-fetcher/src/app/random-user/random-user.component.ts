import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-random-user',
  templateUrl: './random-user.component.html',
  styleUrls: ['./random-user.component.scss']
})
export class RandomUserComponent implements OnInit {
  user: any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.fetchUser().subscribe((data) => {
      console.log("data", data);
      
      return this.mapToUser(data?.results[0])
    })
    // .subscribe(data => (this.mapToUser(data?.result[0])),
    // err => console.error(err)
    // )
  }

  mapToUser(user: any): User {
    return {
      name: `${user.name.first} ${user.name.first} ${user.name.last}`,
      email: user.email,
      dob: this.formatDate(new Date(user.dob.date)),
      cell: user.cell,
      address: `${user.location.postcode} - ${user.location.street}`,
      password: user.login.password,
      picture: user.picture.large
    }
  }

  formatDate(date: Date): string {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; 
  }
}
