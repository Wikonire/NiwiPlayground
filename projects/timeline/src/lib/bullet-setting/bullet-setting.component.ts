import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TimelinePoint } from '../chronology/chronology-data.interface';

@Component({
	selector: 'lib-bullet-setting',
	templateUrl: './bullet-setting.component.html',
	styleUrls: ['./bullet-setting.component.scss']
})
export class BulletSettingComponent {
	@Input() pointType: 'Date' | 'CustomDateUnit' = 'CustomDateUnit';
	@Output() createNewBullet: EventEmitter<TimelinePoint> = new EventEmitter<TimelinePoint>();

	addBullet(point: TimelinePoint) {
		this.createNewBullet.emit(point);
	}
}
