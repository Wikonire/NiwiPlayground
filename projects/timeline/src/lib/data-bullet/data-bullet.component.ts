import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
	selector: 'lib-data-bullet',
	templateUrl: './data-bullet.component.html',
	styleUrls: ['./data-bullet.component.scss']
})
export class DataBulletComponent {
	@Input() diameter = 40;
	@Input() name = '';
	@Input() title = '';
	@Input() timePoint = '';
	@Input() showDate: 'always' | 'byClick' | 'byHover' | 'never' = 'always';
	@Input() id: number;
	@Input() activePoints?: number[];
	@Input() hoveredPoint?: number;
	@Input() showName: 'always' | 'byClick' | 'byHover' | 'never' = 'always';

	@Output() pointClicked: EventEmitter<number> = new EventEmitter<number>();
	@Output() pointHovered: EventEmitter<number> = new EventEmitter<number | undefined>();
}
