import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent implements OnInit {

  iconColor: string;
  @Input() count: number;
  @Input() set voted(val) {
    this.iconColor = val ? 'red' : 'white';
  }
  @Output() vote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(): void {
    this.vote.emit({});
  }
}
