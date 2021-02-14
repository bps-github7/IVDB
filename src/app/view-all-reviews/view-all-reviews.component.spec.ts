import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAllReviewsComponent } from './view-all-reviews.component';

describe('ViewAllReviewsComponent', () => {
  let component: ViewAllReviewsComponent;
  let fixture: ComponentFixture<ViewAllReviewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
