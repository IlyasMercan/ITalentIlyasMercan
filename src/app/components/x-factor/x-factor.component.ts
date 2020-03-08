import {Component, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-x-factor',
  templateUrl: './x-factor.component.html',
  styleUrls: ['./x-factor.component.css']
})
export class XFactorComponent implements OnInit {
  eventToDisplay: Event;
  constructor() { }

  ngOnInit() {
  }

  displayEvent(event: Event) {
    this.eventToDisplay = event;
  }
}
