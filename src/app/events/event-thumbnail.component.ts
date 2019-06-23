import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span class="pad-left">Location: {{event.location.address}}</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
      <button class="btn btn-primary" (click)="clickMe()">Click me</button>
    </div>
  `,
  selector: 'event-thumbnail',
  styles: [
    `
      .pad-left {
        padding-left: 10px;
      }
      .well div {
        color: #bbb;
      }
    `
  ]
})

export class EventThumbnailComponent {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();

  clickMe(): void {
    this.eventClick.emit(this.event.name);
  }

  printSomething(): void {
    console.log('foo');
  }
}
