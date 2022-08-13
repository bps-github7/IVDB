import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumSelectionComponent } from './forum-selection.component';

describe('ForumSelectionComponent', () => {
  let component: ForumSelectionComponent;
  let fixture: ComponentFixture<ForumSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
