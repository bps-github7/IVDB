import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionsDashboardComponent } from './contributions-dashboard.component';

describe('ContributionsDashboardComponent', () => {
  let component: ContributionsDashboardComponent;
  let fixture: ComponentFixture<ContributionsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContributionsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
