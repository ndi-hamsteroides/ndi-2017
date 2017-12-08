import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AledComponent } from './aled.component';

describe('AledComponent', () => {
  let component: AledComponent;
  let fixture: ComponentFixture<AledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
