import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';
import {IEvent} from '../shared/event.model';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  isDirty = true;
  newEvent: IEvent;
  constructor(
    private router: Router,
    private eventService: EventService
    ) { }

  ngOnInit() {
    this.newEvent = {
      id: 1000,
      name: 'Ng Spectacular',
      date: new Date('8/8/2028'),
      time: '10am',
      price: 799.99,
      location: {
        address: '456 Happy St',
        city: 'Felicity',
        country: 'Angularistan'
      },
      onlineUrl: 'http://ngSpectacular.com',
      imageUrl: 'http://ngSpectacular.com/logo.png',
      sessions: []
    };
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['events']);
  }
}
