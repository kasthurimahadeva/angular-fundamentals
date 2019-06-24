import {Component, Input} from '@angular/core';

@Component({
  template: `
    <div class="well hoverwell thumbnail">
      <h2>{{event.name}}</h2>
      <div>Date: {{event.date}}</div>
      <div>Time: {{event.time}}</div>
      <div>Price: \${{event.price}}</div>
      <div>
        <span class="pad-right">Location: {{event.location.address}}</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>
      </div>
    </div>
  `,
  selector: 'event-thumbnail',
  styles: [
    `
      .thumbnail {
        min-height: 210px;
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
  @Input() event: any;
}
