import {Component, OnInit} from '@angular/core';
import {ToastrService} from '../common/toastr.service';
import {ActivatedRoute} from '@angular/router';
import {IEvent} from './shared/event.model';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events: IEvent[];
  constructor(
    private route: ActivatedRoute,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.route.snapshot.data.events;
  }

  handleClickEvent(eventName: any) {
    this.toastrService.success(eventName);
  }
}
