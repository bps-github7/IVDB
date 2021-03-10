import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsolePostComponent } from './console-post.component';

describe('ConsolePostComponent', () => {
  let component: ConsolePostComponent;
  let fixture: ComponentFixture<ConsolePostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsolePostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsolePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
