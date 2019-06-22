import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-app',
  template: `
    <h2> Hello World! </h2>
    <img src="/assets/images/basic-shield.png" />
  `
})
export class EventsAppComponent {
  title = 'ng-fundamentals';
}
