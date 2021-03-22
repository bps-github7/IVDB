import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsoleInfoFormComponent } from './console-info-form.component';

describe('ConsoleInfoFormComponent', () => {
  let component: ConsoleInfoFormComponent;
  let fixture: ComponentFixture<ConsoleInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsoleInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsoleInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
