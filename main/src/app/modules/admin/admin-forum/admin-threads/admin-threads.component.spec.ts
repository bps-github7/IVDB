import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminThreadsComponent } from './admin-threads.component';

describe('AdminThreadsComponent', () => {
  let component: AdminThreadsComponent;
  let fixture: ComponentFixture<AdminThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
