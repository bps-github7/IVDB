import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamingIndexComponent } from './gaming-index.component';

describe('GamingIndexComponent', () => {
  let component: GamingIndexComponent;
  let fixture: ComponentFixture<GamingIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamingIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamingIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
