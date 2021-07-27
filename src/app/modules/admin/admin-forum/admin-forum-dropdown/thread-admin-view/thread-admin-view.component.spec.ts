import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadAdminViewComponent } from './thread-admin-view.component';

describe('ThreadAdminViewComponent', () => {
  let component: ThreadAdminViewComponent;
  let fixture: ComponentFixture<ThreadAdminViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadAdminViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadAdminViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
