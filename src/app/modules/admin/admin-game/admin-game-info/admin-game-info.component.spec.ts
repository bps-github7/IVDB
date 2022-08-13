import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGameInfoComponent } from './admin-game-info.component';

describe('AdminGameInfoComponent', () => {
  let component: AdminGameInfoComponent;
  let fixture: ComponentFixture<AdminGameInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminGameInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGameInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
