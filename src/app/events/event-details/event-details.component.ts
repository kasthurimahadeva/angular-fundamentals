import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from '../shared/event.model';
import {EventService} from '../shared/event.service';


@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  id: number;
  constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.params.id;
    this.event = this.eventService.getEvent(this.id);
  }

}
