import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoneChildComponent } from './done-child.component';

describe('DoneChildComponent', () => {
  let component: DoneChildComponent;
  let fixture: ComponentFixture<DoneChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoneChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoneChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
