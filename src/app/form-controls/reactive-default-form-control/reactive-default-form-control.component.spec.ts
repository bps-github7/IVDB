import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveDefaultFormControlComponent } from './reactive-default-form-control.component';

describe('ReactiveDefaultFormControlComponent', () => {
  let component: ReactiveDefaultFormControlComponent;
  let fixture: ComponentFixture<ReactiveDefaultFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveDefaultFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveDefaultFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
