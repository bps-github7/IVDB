import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialFormControlComponent } from './credential-form-control.component';

describe('CredentialFormControlComponent', () => {
  let component: CredentialFormControlComponent;
  let fixture: ComponentFixture<CredentialFormControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialFormControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredentialFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
