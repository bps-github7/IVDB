import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserContribComponent } from './view-user-contrib.component';

describe('ViewUserContribComponent', () => {
  let component: ViewUserContribComponent;
  let fixture: ComponentFixture<ViewUserContribComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewUserContribComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserContribComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
