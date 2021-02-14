import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConsoleMakersComponent } from './console-makers.component';

describe('ConsoleMakersComponent', () => {
  let component: ConsoleMakersComponent;
  let fixture: ComponentFixture<ConsoleMakersComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsoleMakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleMakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
