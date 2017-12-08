import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledBadComponent } from './aled-bad.component';

describe('AledBadComponent', () => {
  let component: AledBadComponent;
  let fixture: ComponentFixture<AledBadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledBadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledBadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
