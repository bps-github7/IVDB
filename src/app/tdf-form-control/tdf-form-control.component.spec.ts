import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfFormControlComponent } from './tdf-form-control.component';

describe('TdfFormControlComponent', () => {
  let component: TdfFormControlComponent;
  let fixture: ComponentFixture<TdfFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
