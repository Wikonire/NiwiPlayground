import { Component, Input } from '@angular/core';

@Component({
	selector: 'lib-line',
	templateUrl: './line.component.html',
	styleUrls: ['./line.component.scss']
})
export class LineComponent {
	@Input() width = 200;
	@Input() height = 5;
}
