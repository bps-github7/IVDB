import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContribHomeComponent } from './contrib-home.component';

describe('ContribHomeComponent', () => {
  let component: ContribHomeComponent;
  let fixture: ComponentFixture<ContribHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContribHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContribHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
