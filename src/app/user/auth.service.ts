import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(user: string, password: string) {
    this.currentUser = {
      id: 1,
      firstName: 'Panda',
      lastName: 'Karady',
      userName: user
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }

  updateProfile(firstName: string, lastName: string) {
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }
}
