import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleMakersComponent } from './console-makers.component';

describe('ConsoleMakersComponent', () => {
  let component: ConsoleMakersComponent;
  let fixture: ComponentFixture<ConsoleMakersComponent>;

  beforeEach(async(() => {
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
