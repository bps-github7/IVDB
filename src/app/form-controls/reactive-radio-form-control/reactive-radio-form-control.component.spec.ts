import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveRadioFormControlComponent } from './reactive-radio-form-control.component';

describe('ReactiveRadioFormControlComponent', () => {
  let component: ReactiveRadioFormControlComponent;
  let fixture: ComponentFixture<ReactiveRadioFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveRadioFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveRadioFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
