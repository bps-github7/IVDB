import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameTableComponent } from './admin-game-table.component';

describe('AdminGameTableComponent', () => {
  let component: AdminGameTableComponent;
  let fixture: ComponentFixture<AdminGameTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGameTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
