import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAsyncFormControlComponent } from './reactive-async-form-control.component';

describe('ReactiveAsyncFormControlComponent', () => {
  let component: ReactiveAsyncFormControlComponent;
  let fixture: ComponentFixture<ReactiveAsyncFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAsyncFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAsyncFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
