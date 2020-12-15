import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvideRatingComponent } from './provide-rating.component';

describe('ProvideRatingComponent', () => {
  let component: ProvideRatingComponent;
  let fixture: ComponentFixture<ProvideRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvideRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvideRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
