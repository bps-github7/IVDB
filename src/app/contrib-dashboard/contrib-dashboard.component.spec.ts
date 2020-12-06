import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribDashboardComponent } from './contrib-dashboard.component';

describe('ContribDashboardComponent', () => {
  let component: ContribDashboardComponent;
  let fixture: ComponentFixture<ContribDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContribDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
