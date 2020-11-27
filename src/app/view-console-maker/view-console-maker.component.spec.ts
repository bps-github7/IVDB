import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewConsoleMakerComponent } from './view-console-maker.component';

describe('ViewConsoleMakerComponent', () => {
  let component: ViewConsoleMakerComponent;
  let fixture: ComponentFixture<ViewConsoleMakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewConsoleMakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewConsoleMakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
