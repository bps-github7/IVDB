import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewRatingsComponent } from './view-ratings.component';

describe('ViewRatingsComponent', () => {
  let component: ViewRatingsComponent;
  let fixture: ComponentFixture<ViewRatingsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
