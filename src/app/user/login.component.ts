import {Component} from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  userName: any;
  password: any;

  login(formValues) {
    console.log(formValues);
  }
}
