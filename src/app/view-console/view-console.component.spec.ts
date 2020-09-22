import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsoleComponent } from './view-console.component';

describe('ViewConsoleComponent', () => {
  let component: ViewConsoleComponent;
  let fixture: ComponentFixture<ViewConsoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConsoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
