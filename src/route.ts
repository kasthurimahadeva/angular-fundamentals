import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {EventAddComponent} from './app/events/event-add/event-add.component';
import {Error404Component} from './app/errors/404.component';
import {EventRouteActivator} from './app/events/event-details/event-route-activator.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent
  },
  {
    path: 'events/new',
    component: EventAddComponent
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  }
];
