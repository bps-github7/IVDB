import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminForumFormComponent } from './admin-forum-form.component';

describe('AdminForumFormComponent', () => {
  let component: AdminForumFormComponent;
  let fixture: ComponentFixture<AdminForumFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminForumFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminForumFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
