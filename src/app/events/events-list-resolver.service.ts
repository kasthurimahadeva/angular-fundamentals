import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {Observable} from 'rxjs';
import {EventService} from './shared/event.service';
import {map} from 'rxjs/operators';
import {IEvent} from './shared/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsListResolver implements Resolve<any> {

  constructor(private eventService: EventService) { }

  resolve(): Observable<IEvent[]> {
    return this.eventService.getEvents().pipe(map(events => events));
  }
}