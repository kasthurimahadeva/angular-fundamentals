import {Component, Input, OnChanges} from '@angular/core';
import {ISession} from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {

  @Input() sessions: ISession[];
  @Input() filterBy: string;
  filteredSessions: ISession[] = [];
  constructor() { }

  ngOnChanges() {
    if(this.sessions) {
      this.filterSession(this.filterBy);
    }
  }

  filterSession(filter: string): void {
    if (filter === 'all') {
      this.filteredSessions = this.sessions.slice(0);
    } else {
      this.filteredSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() === filter);
    }
  }
}
