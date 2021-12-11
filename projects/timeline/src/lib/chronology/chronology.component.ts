import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ShowDateType, TimelinePoint } from './chronology-data.interface';

@Component({
	selector: 'lib-chronology',
	templateUrl: './chronology.component.html',
	styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnChanges {
	@Input() dataSource: TimelinePoint[] = [];
	@Input() showDate: ShowDateType;

	diameter = '20px';
	chronologyStyles: Record<string, string> = {};

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.dataSource && changes.dataSource.currentValue !== changes.dataSource.previousValue) {
			this.dataSource = changes.dataSource.currentValue;
			this.setChronologyStyles();
		}
	}

	private setChronologyStyles(): void {
		this.chronologyStyles = {
			display: 'grid',
			'grid-template-column': 'repeat(' + this.dataSource.length + ', 1fr)'
		};
	}
}
