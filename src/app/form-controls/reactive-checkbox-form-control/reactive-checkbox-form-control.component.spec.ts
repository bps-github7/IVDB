import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCheckboxFormControlComponent } from './reactive-checkbox-form-control.component';

describe('ReactiveCheckboxFormControlComponent', () => {
  let component: ReactiveCheckboxFormControlComponent;
  let fixture: ComponentFixture<ReactiveCheckboxFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCheckboxFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCheckboxFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
