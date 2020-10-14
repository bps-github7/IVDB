import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfMultiFormControlComponent } from './tdf-multi-form-control.component';

describe('TdfMultiFormControlComponent', () => {
  let component: TdfMultiFormControlComponent;
  let fixture: ComponentFixture<TdfMultiFormControlComponent>;

  beforeEach(async(() => {
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
