import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveTestComponent } from './drive-test.component';

describe('DriveTestComponent', () => {
  let component: DriveTestComponent;
  let fixture: ComponentFixture<DriveTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
