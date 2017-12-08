import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamComponent } from './sam.component';

describe('SamComponent', () => {
  let component: SamComponent;
  let fixture: ComponentFixture<SamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
