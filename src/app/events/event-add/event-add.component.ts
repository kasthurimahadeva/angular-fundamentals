import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  isDirty = true;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
