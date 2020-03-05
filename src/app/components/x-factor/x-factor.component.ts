import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-x-factor',
  templateUrl: './x-factor.component.html',
  styleUrls: ['./x-factor.component.css']
})
export class XFactorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.createInteractiveXFactor();
  }

  createInteractiveXFactor() {
    const width = 1800;
    const height = 800;

    const xFactor = d3.select('#x-factor-container')
      .append('svg')
      .attr('width', width)
      .attr('height', height);

    // add x-factor to canvas
    xFactor.append('svg:image')
      .attr('xlink:href', 'assets/x-factor.jpg');

    // (em)passie
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15,  136, 15, 15,  'em-passie')
      .on('click', () => {this.openDialogBox('empassie')});

    // ondernemend en innovatief
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555,  136, 15, 15,  'ondernemend-en-innovatief')
      .on('click', () => {this.openDialogBox('ondernemend en innovatief')});

    // (internationaal) samen(net)werking
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 15,  416, 15, 15,  'internationaal-samen-net-werking')
      .on('click', () => {this.openDialogBox('internationaal samen netwerken')});

    // multi- & disciplinariteit
    this.createRectangle(xFactor, '#58a618', 0.25, 252, 66, 555,  416, 15, 15,  'multi-en-disciplinariteit')
      .on('click', () => {this.openDialogBox('multi en disciplinariteit')});
  }

  createRectangle(svg, fill, fillOpacity, width, height, x, y, rx, ry, htmlClass) {
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
      .attr('class', htmlClass);
  }

  openDialogBox(x) {
    console.log('still under construction from ' + x);
  }
}
