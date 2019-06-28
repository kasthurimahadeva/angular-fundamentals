import {Routes} from '@angular/router';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventAddComponent,
  EventRouteActivator,
  EventsListResolver,
  CreateSessionComponent
} from './app/events';
import {Error404Component} from './app/errors/404.component';

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
    path: 'events/session/new',
    component: CreateSessionComponent
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
