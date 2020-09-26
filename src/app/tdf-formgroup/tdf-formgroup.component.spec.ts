import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfFormgroupComponent } from './tdf-formgroup.component';

describe('TdfFormgroupComponent', () => {
  let component: TdfFormgroupComponent;
  let fixture: ComponentFixture<TdfFormgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfFormgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfFormgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
