import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InprogressChildComponent } from './inprogress-child.component';

describe('InprogressChildComponent', () => {
  let component: InprogressChildComponent;
  let fixture: ComponentFixture<InprogressChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InprogressChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InprogressChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
