import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormControlComponent } from './reactive-form-control.component';

describe('ReactiveFormControlComponent', () => {
  let component: ReactiveFormControlComponent;
  let fixture: ComponentFixture<ReactiveFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveFormControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
