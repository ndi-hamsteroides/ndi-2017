import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledBreatheComponent } from './aled-breathe.component';

describe('AledBreatheComponent', () => {
  let component: AledBreatheComponent;
  let fixture: ComponentFixture<AledBreatheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledBreatheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledBreatheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
