import {EventsListComponent} from './app/events/events-list.component';
import {EventDetailsComponent} from './app/events/event-details/event-details.component';
import {Routes} from '@angular/router';
import {EventAddComponent} from './app/events/event-add/event-add.component';
import {Error404Component} from './app/errors/404.component';
import {EventRouteActivator} from './app/events/event-details/event-route-activator.service';
import {EventsListResolver} from './app/events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {events: EventsListResolver}
  },
  {
    path: 'events/new',
    component: EventAddComponent,
    canDeactivate: ['canDeactivateCreateEvent']
  },
  {
    path: 'events/:id',
    component: EventDetailsComponent,
    canActivate: [EventRouteActivator]
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: '/events',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: './user/user.module#UserModule'
  },
];
