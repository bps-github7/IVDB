import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardFormComponent } from './admin-dashboard-form.component';

describe('AdminDashboardFormComponent', () => {
  let component: AdminDashboardFormComponent;
  let fixture: ComponentFixture<AdminDashboardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
