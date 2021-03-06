import {Component, Input} from '@angular/core';
import {IEvent} from './shared/event.model';

@Component({
  template: `
    <div class="well hoverwell thumbnail" [routerLink]="['/events', event?.id]">
      <h2>{{event?.name | uppercase}}</h2>
      <div>Date: {{event?.date | date:'y/M/d'}}</div>
      <div [ngSwitch]="event?.time" [ngStyle]="getStartingTime()">
        Time: {{event?.time}}
        <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
        <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
        <span *ngSwitchDefault>(Normal Start)</span>
      </div>
      <div>Price: {{event?.price | currency:'USD'}}</div>
      <div *ngIf="event?.location">
        <span class="pad-right">Location: {{event.location?.address}}</span>
        <span>{{event.location?.city}}, {{event.location?.country}}</span>
      </div>
      <div *ngIf="event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>
    </div>
  `,
  selector: 'event-thumbnail',
  styles: [
    `
      .thumbnail {
        min-height: 250px;
      }
      .pad-right {
        padding-right: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartingTime(): any {
    if (this.event && this.event.time === '8:00 am') {
      return {color: '#003300', 'font-weight': 'bold'};
    }
    return {};
  }
}
