import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserDropdownComponent } from './auth-user-dropdown.component';

describe('AuthUserDropdownComponent', () => {
  let component: AuthUserDropdownComponent;
  let fixture: ComponentFixture<AuthUserDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
