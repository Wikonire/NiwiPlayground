import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {ChronologyData} from './chronology-data.interface';

@Component({
  selector: 'lib-chronology',
  templateUrl: './chronology.component.html',
  styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnChanges {
  width = '20px';
  @Input() dataSource: ChronologyData[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.dataSource && changes.dataSource.currentValue !== changes.dataSource.previousValue) {
     this.dataSource = changes.dataSource.currentValue;
    }
  }

}
