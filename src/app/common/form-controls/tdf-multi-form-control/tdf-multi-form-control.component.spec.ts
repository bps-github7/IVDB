import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TdfMultiFormControlComponent } from './tdf-multi-form-control.component';

describe('TdfMultiFormControlComponent', () => {
  let component: TdfMultiFormControlComponent;
  let fixture: ComponentFixture<TdfMultiFormControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfMultiFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfMultiFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
