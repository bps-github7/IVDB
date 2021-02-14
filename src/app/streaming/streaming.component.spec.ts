import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StreamingComponent } from './streaming.component';

describe('StreamingComponent', () => {
  let component: StreamingComponent;
  let fixture: ComponentFixture<StreamingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
