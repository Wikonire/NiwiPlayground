import { NgModule } from '@angular/core';
import { DataBulletComponent } from './data-bullet/data-bullet.component';
import { CommonModule } from '@angular/common';
import { ChronologyComponent } from './chronology/chronology.component';
import { LineComponent } from './line/line.component';
import { BulletSettingComponent } from './bullet-setting/bullet-setting.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
	declarations: [DataBulletComponent, ChronologyComponent, LineComponent, BulletSettingComponent],
	imports: [
		CommonModule,
		MatInputModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatCardModule,
		BrowserAnimationsModule
	],
	exports: [DataBulletComponent, ChronologyComponent, LineComponent, BulletSettingComponent]
})
export class TimelineModule {}
