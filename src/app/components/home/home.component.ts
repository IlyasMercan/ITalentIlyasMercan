import { Component, OnInit } from '@angular/core';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  eventToDisplay: Event;
  constructor() { }

  ngOnInit() {
  }

  displayEvent(event: Event) {
    this.eventToDisplay = event;
  }

}
