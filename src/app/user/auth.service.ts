import { Injectable } from '@angular/core';
import {IUser} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: IUser;
  constructor() { }

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName,
      firstName: 'Panda',
      lastName: 'Karady'
    };
  }

  isAuthenticated(): boolean {
    return !!this.currentUser;
  }
}
