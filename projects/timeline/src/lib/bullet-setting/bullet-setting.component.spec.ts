import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletSettingComponent } from './bullet-setting.component';

describe('BulletSettingComponent', () => {
	let component: BulletSettingComponent;
	let fixture: ComponentFixture<BulletSettingComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [BulletSettingComponent]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BulletSettingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
