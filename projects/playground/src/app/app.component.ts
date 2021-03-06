import { Component, OnInit } from '@angular/core';
import { TimelinePoint } from '../../../timeline/src/lib/chronology/chronology-data.interface';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	title = 'playground';
	dataSource: TimelinePoint[] = [];
	elements = [
		{ name: 'eins', datePoint: 2 },
		{ name: 'zwei', datePoint: 5 },
		{ name: 'drei', datePoint: 10 },
		{ name: 'vier', datePoint: 15 },
		{ name: 'fünf', datePoint: 17 },
		{ name: 'sechs', datePoint: 18 }
	];
	dateElements = [];

	ngOnInit(): void {
		for (let i = 1; i <= 30; i++) {
			this.dateElements.push(i);
		}

		for (const item of this.dateElements) {
			const data = this.elements.find((element) => element.datePoint === item);
			if (data !== undefined) {
				console.log(item);
				this.dataSource.push({ date: item, name: data.name } as TimelinePoint);
			} else {
				this.dataSource.push({} as TimelinePoint);
			}
		}
		console.log(this.dataSource);
	}
}
