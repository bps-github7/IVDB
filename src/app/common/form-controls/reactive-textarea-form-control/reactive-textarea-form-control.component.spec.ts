import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReactiveTextareaFormControlComponent } from './reactive-textarea-form-control.component';

describe('ReactiveTextareaFormControlComponent', () => {
  let component: ReactiveTextareaFormControlComponent;
  let fixture: ComponentFixture<ReactiveTextareaFormControlComponent>;

  beforeEach(waitForAsync(() => {
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
