import { NgModule } from '@angular/core';
import { DataBulletComponent } from './data-bullet/data-bullet.component';
import {CommonModule} from '@angular/common';
import { ChronologyComponent } from './chronology/chronology.component';
import {BrowserModule} from '@angular/platform-browser';
import { LineComponent } from './line/line.component';



@NgModule({
  declarations: [DataBulletComponent, ChronologyComponent, LineComponent],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports: [DataBulletComponent, ChronologyComponent, LineComponent]
})
export class TimelineModule { }
