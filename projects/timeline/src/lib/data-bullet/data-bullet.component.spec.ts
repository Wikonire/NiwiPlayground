import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBulletComponent } from './data-bullet.component';

describe('DataBulletComponent', () => {
  let component: DataBulletComponent;
  let fixture: ComponentFixture<DataBulletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataBulletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataBulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
