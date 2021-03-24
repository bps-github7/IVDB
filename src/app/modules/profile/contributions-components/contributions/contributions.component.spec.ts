import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContributionsComponent } from './contributions.component';

describe('ContributionsComponent', () => {
  let component: ContributionsComponent;
  let fixture: ComponentFixture<ContributionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
