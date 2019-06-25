import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {EventService} from '../shared/event.service';

@Injectable({
  providedIn: 'root'
})
export class EventRouteActivator implements  CanActivate {
  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const eventExists = !!this.eventService.getEvent(+route.params.id);
    if (!eventExists) {
      this.router.navigate(['/404']);
    }
    return eventExists;
  }
}
