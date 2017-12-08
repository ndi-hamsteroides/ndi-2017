import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledOkComponent } from './aled-ok.component';

describe('AledOkComponent', () => {
  let component: AledOkComponent;
  let fixture: ComponentFixture<AledOkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledOkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledOkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
