import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = {
    name: 'OilerPlate',
    password: '123456',
  };
  constructor() {}
}
