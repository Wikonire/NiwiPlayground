import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TimelinePoint } from './chronology-data.interface';

@Component({
	selector: 'lib-chronology',
	templateUrl: './chronology.component.html',
	styleUrls: ['./chronology.component.scss']
})
export class ChronologyComponent implements OnChanges {
	@Input() dataSource: TimelinePoint[] = [];
	@Input() showDate: 'always' | 'byClick' | 'byHover' | 'never' = 'byClick';
	@Input() showName: 'always' | 'byClick' | 'byHover' | 'never' = 'byHover';

	diameter = 20;
	chronologyStyles: Record<string, string> = {};
	timelineStyles: Record<string, string> = {};
	visiblePerClick: number[] = [];
	hoveredPoint?: number;
	addBullet: boolean = false;

	ngOnChanges(changes: SimpleChanges): void {
		if (changes.dataSource && changes.dataSource.currentValue !== changes.dataSource.previousValue) {
			this.dataSource = changes.dataSource.currentValue;
			this.setChronologyStyles();
			this.setTimelineStyles();
		}
	}

	private setChronologyStyles(): void {
		this.chronologyStyles = {
			display: 'grid',
			'grid-template-column': 'repeat(' + this.dataSource.length + ', 1fr)'
		};
	}

	private setTimelineStyles(): void {
		this.timelineStyles = {
			'grid-column': '-1' + '/' + (this.dataSource.length + 1),
			'grid-template-column': 'repeat(' + this.dataSource.length + ', 1fr)'
		};
	}

	changeActiveBulletState(id: number): void {
		if (this.visiblePerClick.includes(id)) {
			this.visiblePerClick = this.visiblePerClick.filter((bulletId: number) => {
				return bulletId !== id;
			});
		} else if (!this.visiblePerClick.includes(id) && this.dataSource[id] !== undefined) {
			this.visiblePerClick.push(id);
		} else {
			throw new Error('Invalid Id');
		}
	}

	changeHoveredPoint(id: number | undefined): void {
		if ((this.showDate === 'byHover' || this.showName === 'byHover') && id) {
			this.hoveredPoint = id;
		} else {
			this.hoveredPoint = undefined;
		}
	}

	showAddBullet(): void {
		this.addBullet = true;
	}
}
