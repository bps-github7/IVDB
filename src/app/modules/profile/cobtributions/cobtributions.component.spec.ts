import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CobtributionsComponent } from './cobtributions.component';

describe('CobtributionsComponent', () => {
  let component: CobtributionsComponent;
  let fixture: ComponentFixture<CobtributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CobtributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CobtributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
