import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Event} from '../../models/event.model';
import {EventService} from '../../services/event.service';
import * as d3 from 'd3';

@Component({
  selector: 'app-interactive-x-factor',
  templateUrl: './interactive-x-factor.component.html',
  styleUrls: ['./interactive-x-factor.component.css']
})
export class InteractiveXFactorComponent implements OnInit {

  @Output() onClickOnXFactorEvent: EventEmitter<Event> = new EventEmitter();

  constructor(private service: EventService) { }

  ngOnInit() {
    this.createInteractiveXFactor();
  }

  createInteractiveXFactor() {
    const width = 821;
    const height = 615;

    const xFactor = d3.select('#x-factor-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .attr('id', 'x-factor-svg')
      .attr('display', 'block')
      .attr('class', 'mx-auto');


    // add x-factor to canvas
    xFactor.append('svg:image')
      .attr('xlink:href', 'assets/x-factor.jpg');

    // (em)passie
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15,  136, 15, 15,  'em-passie', 'em-passie')
      .on('click', () => {this.clickOnXFactorEvent(this.service.getEmpassie())})
      .on('mouseover', () => {
        document.getElementById('em-passie').setAttribute('fill-opacity', '0.5');
      })
      .on('mouseout', () => {
        document.getElementById('em-passie').setAttribute('fill-opacity', '0.25');
      });

    // ondernemend en innovatief
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555,  136, 15, 15,  'ondernemend-en-innovatief', 'ondernemend-en-innovatief')
      .on('click', () => {this.clickOnXFactorEvent(this.service.getOndernemendEnInnovatief())})
      .on('mouseover', () => {
        document.getElementById('ondernemend-en-innovatief').setAttribute('fill-opacity', '0.5');
      })
      .on('mouseout', () => {
        document.getElementById('ondernemend-en-innovatief').setAttribute('fill-opacity', '0.25');
      });;

    // (internationaal) samen(net)werking
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15,  416, 15, 15,  'internationaal-samen-net-werking', 'internationaal-samen-net-werking')
      .on('click', () => {this.clickOnXFactorEvent(this.service.getInternationaalSamenNetWerking())})
      .on('mouseover', () => {
        document.getElementById('internationaal-samen-net-werking').setAttribute('fill-opacity', '0.5');
      })
      .on('mouseout', () => {
        document.getElementById('internationaal-samen-net-werking').setAttribute('fill-opacity', '0.25');
      });;

    // multi- & disciplinariteit
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555,  416, 15, 15,  'multi-en-disciplinariteit', 'multi-en-disciplinariteit')
      .on('click', () => {this.clickOnXFactorEvent(this.service.getMultiEnDisciplinariteit())})
      .on('mouseover', () => {
        document.getElementById('multi-en-disciplinariteit').setAttribute('fill-opacity', '0.5');
      })
      .on('mouseout', () => {
        document.getElementById('multi-en-disciplinariteit').setAttribute('fill-opacity', '0.25');
      });;
  }

  createRectangle(svg, fill, fillOpacity, width, height, x, y, rx, ry, htmlClass, id) {
    return svg
      .append('rect')
      .attr('fill', fill)
      .attr('fill-opacity', fillOpacity)
      .attr('height', height)
      .attr('width', width)
      .attr('x', x)
      .attr('y', y)
      .attr('rx', rx)
      .attr('ry', ry)
      .attr('class', htmlClass)
      .attr('id', id);
  }

  openDialogBox(x) {
    console.log('still under construction from ' + x);
  }

  clickOnXFactorEvent(event: Event) {
    this.onClickOnXFactorEvent.emit(event);
  }
}


