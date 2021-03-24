import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestNewComponent } from './suggest-new.component';

describe('SuggestNewComponent', () => {
  let component: SuggestNewComponent;
  let fixture: ComponentFixture<SuggestNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
