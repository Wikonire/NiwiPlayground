import { Component, Input } from '@angular/core';
import { ShowDateType } from '../chronology/chronology-data.interface';

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
	@Input() showDate: ShowDateType = 'always';
}
