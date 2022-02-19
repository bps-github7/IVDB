import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminConsolesComponent } from './admin-consoles.component';

describe('AdminConsolesComponent', () => {
  let component: AdminConsolesComponent;
  let fixture: ComponentFixture<AdminConsolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminConsolesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminConsolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
