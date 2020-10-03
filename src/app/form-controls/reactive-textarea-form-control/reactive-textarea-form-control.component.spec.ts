import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveTextareaFormControlComponent } from './reactive-textarea-form-control.component';

describe('ReactiveTextareaFormControlComponent', () => {
  let component: ReactiveTextareaFormControlComponent;
  let fixture: ComponentFixture<ReactiveTextareaFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveTextareaFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveTextareaFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
