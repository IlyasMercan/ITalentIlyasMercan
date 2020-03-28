import { Component, OnInit } from '@angular/core';
import {MinimalEventService} from '../../services/min-event.service';
import {MinimalEvent} from '../../models/min-event.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {
  events: MinimalEvent[];

  constructor(private service: MinimalEventService) { }

  ngOnInit() {
    this.events = this.service.events;
  }

}
