import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecentlyPostedComponent } from './recently-posted.component';

describe('RecentlyPostedComponent', () => {
  let component: RecentlyPostedComponent;
  let fixture: ComponentFixture<RecentlyPostedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentlyPostedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentlyPostedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
