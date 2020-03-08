import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as d3 from 'd3';
import {Event} from '../../models/event.model';
import {EventService} from '../../services/event.service';

const MILISECONDS_IN_DAY = (1000 * 60 * 60 * 24);
const START_TIMELINE = new Date('2019-01-01');
const END_TIMELINE = new Date('2020-03-01');
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Output() onClickOnEvent: EventEmitter<Event> = new EventEmitter();

  constructor(private service: EventService) {
  }

  ngOnInit() {
    this.createTimeline();
  }

  createTimeline() {
    const events = this.service.events;
    const width = 1300;
    const height = 60;

    const timeline = d3.select('#timeline-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('display', 'block')
      .attr('class', 'mx-auto');

    // create a timeline with start date 01/01/2019 and end date 01/03/2019
    this.createRectangle(timeline, 'black', ((END_TIMELINE.getTime() / MILISECONDS_IN_DAY) - (START_TIMELINE.getTime() / MILISECONDS_IN_DAY)) * 3, 2, 0, 30, 'timeline');

    // create a lower and an upper border for the timeline
    this.createRectangle(timeline, 'black', 3, 30, 0, 16, 'lower-border');
    this.createRectangle(timeline, 'black', 3, 30, ((END_TIMELINE.getTime() / MILISECONDS_IN_DAY) - (START_TIMELINE.getTime() / MILISECONDS_IN_DAY)) * 3, 16, 'upper-border');


    // put all events on timeline
    for (let i = 0; i < events.length; i++) {
      this.createEventOnTimeline(timeline, events[i]);
    }

    // make sure every element of specific class lights up when hovered
    for (let i = 0; i < events.length; i++) {
      let eventClassName = events[i].name.replace(/ /g, '-').replace(/:/g, '').replace(/'/g, '').toLowerCase();
      d3.selectAll('.' + eventClassName)
        .on('mouseover', function() {
          for (let j = 0; j < document.getElementsByClassName(eventClassName).length; j++) {
            document.getElementsByClassName(eventClassName)[j].setAttribute('fill', '#58a618');
          }
        })
        .on('mouseout', function() {
          for (let j = 0; j < document.getElementsByClassName(eventClassName).length; j++) {
            document.getElementsByClassName(eventClassName)[j].setAttribute('fill', 'black');
          }
        });

      timeline.append('style').text('.' + eventClassName + ' {\n' +
        '  transition: 0.5s;\n' +
        '}\n');

      timeline.append('style').text('.' + eventClassName + ':hover {\n' +
        '  transition: 0.5s;\n' +
        '}\n');
    }
  }


  createEventOnTimeline(svg, event) {
    // for every date, create a square on the timeline
    for (let i = 0; i < event.dates.length; i++) {
      const dayFromStartOfTimeline = ((event.dates[i].getTime() / MILISECONDS_IN_DAY) - (START_TIMELINE.getTime() / MILISECONDS_IN_DAY));
      this.createRectangle(svg, 'black', 3, 16, dayFromStartOfTimeline * 3, 23, event.name.replace(/ /g, '-').replace(/:/g, '').replace(/'/g, '').toLowerCase())
        .on('click', () => {this.clickOnEvent(event)});
    }
  }

  createRectangle(svg, fill, width, height, x, y, htmlClass) {
    return svg
      .append('rect')
      .attr('fill', fill)
      .attr('height', height)
      .attr('width', width)
      .attr('x', x)
      .attr('y', y)
      .attr('class', htmlClass);
  }

  clickOnEvent(event: Event) {
    this.onClickOnEvent.emit(event);
  }
}

