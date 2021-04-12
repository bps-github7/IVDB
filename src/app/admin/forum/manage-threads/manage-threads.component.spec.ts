import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageThreadsComponent } from './manage-threads.component';

describe('ManageThreadsComponent', () => {
  let component: ManageThreadsComponent;
  let fixture: ComponentFixture<ManageThreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageThreadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageThreadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
