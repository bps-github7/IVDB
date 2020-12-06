import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContributionsComponent } from './edit-contributions.component';

describe('EditContributionsComponent', () => {
  let component: EditContributionsComponent;
  let fixture: ComponentFixture<EditContributionsComponent>;

  beforeEach(async(() => {
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
