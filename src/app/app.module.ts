import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  EventsListComponent,
  EventDetailsComponent,
  EventAddComponent,
  EventThumbnailComponent,
  CreateSessionComponent,
  SessionListComponent
} from './events';

import { EventsAppComponent } from './events-app.component';
import {NavBarComponent} from './nav/nav-bar.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from '../route';
import {Error404Component} from './errors/404.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well/collapsible-well.component';

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    EventAddComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {}

export function checkDirtyState(component: EventAddComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}
