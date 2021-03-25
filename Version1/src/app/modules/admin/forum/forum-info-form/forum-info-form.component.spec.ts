import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumInfoFormComponent } from './forum-info-form.component';

describe('ForumInfoFormComponent', () => {
  let component: ForumInfoFormComponent;
  let fixture: ComponentFixture<ForumInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
