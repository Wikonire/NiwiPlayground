import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent implements OnInit {
  @Input() width = 200;
  @Input() height = 5;

  constructor() { }

  ngOnInit(): void {
  }

}
