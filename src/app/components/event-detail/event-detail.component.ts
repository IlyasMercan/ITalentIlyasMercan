import {Component, Input, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  @Input() event: Event;
  initiatief: string = "Een initiatief van ";

  constructor() { }

  ngOnInit() {

  }

}
