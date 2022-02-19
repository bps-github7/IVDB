import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTableManagerComponent } from './admin-dashboard-table-manager.component';

describe('AdminDashboardTableManagerComponent', () => {
  let component: AdminDashboardTableManagerComponent;
  let fixture: ComponentFixture<AdminDashboardTableManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDashboardTableManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDashboardTableManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
