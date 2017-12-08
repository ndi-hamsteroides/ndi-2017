import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredsComponent } from './creds.component';

describe('CredsComponent', () => {
  let component: CredsComponent;
  let fixture: ComponentFixture<CredsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
