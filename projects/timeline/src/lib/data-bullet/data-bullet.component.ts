import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'lib-data-bullet',
  templateUrl: './data-bullet.component.html',
  styleUrls: ['./data-bullet.component.scss']
})
export class DataBulletComponent implements OnInit {

  @Input() width = 40;
  @Input() name = '';
  @Input() title = '';
  @Input() timePoint = '';

  constructor() { }

  ngOnInit(): void {
     }

}
