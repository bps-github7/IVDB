import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForumInfoComponent } from './admin-forum-info.component';

describe('AdminForumInfoComponent', () => {
  let component: AdminForumInfoComponent;
  let fixture: ComponentFixture<AdminForumInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForumInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForumInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
