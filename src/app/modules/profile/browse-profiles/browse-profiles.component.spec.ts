import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseProfilesComponent } from './browse-profiles.component';

describe('BrowseProfilesComponent', () => {
  let component: BrowseProfilesComponent;
  let fixture: ComponentFixture<BrowseProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseProfilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
