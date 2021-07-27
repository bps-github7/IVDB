import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForumDropdownComponent } from './admin-forum-dropdown.component';

describe('AdminForumDropdownComponent', () => {
  let component: AdminForumDropdownComponent;
  let fixture: ComponentFixture<AdminForumDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForumDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForumDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
