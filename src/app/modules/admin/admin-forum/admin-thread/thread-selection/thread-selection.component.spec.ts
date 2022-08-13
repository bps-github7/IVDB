import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreadSelectionComponent } from './thread-selection.component';

describe('ThreadSelectionComponent', () => {
  let component: ThreadSelectionComponent;
  let fixture: ComponentFixture<ThreadSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreadSelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreadSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
