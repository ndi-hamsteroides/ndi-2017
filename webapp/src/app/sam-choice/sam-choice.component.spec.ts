import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SamChoiceComponent } from './sam-choice.component';

describe('SamChoiceComponent', () => {
  let component: SamChoiceComponent;
  let fixture: ComponentFixture<SamChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SamChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SamChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
