import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDropdownComponent } from './content-dropdown.component';

describe('ContentDropdownComponent', () => {
  let component: ContentDropdownComponent;
  let fixture: ComponentFixture<ContentDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
