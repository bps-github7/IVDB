import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewContribsComponent } from './view-contribs.component';

describe('ViewContribsComponent', () => {
  let component: ViewContribsComponent;
  let fixture: ComponentFixture<ViewContribsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewContribsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewContribsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
