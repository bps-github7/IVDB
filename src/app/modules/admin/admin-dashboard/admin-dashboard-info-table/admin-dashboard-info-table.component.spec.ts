import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardInfoTableComponent } from './admin-dashboard-info-table.component';

describe('AdminDashboardInfoTableComponent', () => {
  let component: AdminDashboardInfoTableComponent;
  let fixture: ComponentFixture<AdminDashboardInfoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardInfoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardInfoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
