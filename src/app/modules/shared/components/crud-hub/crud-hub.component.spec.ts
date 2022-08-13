import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudHubComponent } from './crud-hub.component';

describe('CrudHubComponent', () => {
  let component: CrudHubComponent;
  let fixture: ComponentFixture<CrudHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
