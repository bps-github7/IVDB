import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewAllRatingsComponent } from './view-all-ratings.component';

describe('ViewAllRatingsComponent', () => {
  let component: ViewAllRatingsComponent;
  let fixture: ComponentFixture<ViewAllRatingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
