import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventService} from '../shared/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  isDirty = true;
  newEvent;
  constructor(
    private router: Router,
    private eventService: EventService
    ) { }

  ngOnInit() {
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
