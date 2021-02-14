import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EditContributionsComponent } from './edit-contributions.component';

describe('EditContributionsComponent', () => {
  let component: EditContributionsComponent;
  let fixture: ComponentFixture<EditContributionsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EditContributionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
