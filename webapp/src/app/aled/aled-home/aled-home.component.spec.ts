import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledHomeComponent } from './aled-home.component';

describe('AledHomeComponent', () => {
  let component: AledHomeComponent;
  let fixture: ComponentFixture<AledHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
