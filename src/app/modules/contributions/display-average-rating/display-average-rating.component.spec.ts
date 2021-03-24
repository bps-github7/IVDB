import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DisplayAverageRatingComponent } from './display-average-rating.component';

describe('DisplayAverageRatingComponent', () => {
  let component: DisplayAverageRatingComponent;
  let fixture: ComponentFixture<DisplayAverageRatingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAverageRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAverageRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
