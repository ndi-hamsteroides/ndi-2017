import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledPlsComponent } from './aled-pls.component';

describe('AledPlsComponent', () => {
  let component: AledPlsComponent;
  let fixture: ComponentFixture<AledPlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledPlsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledPlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
