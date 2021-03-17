import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptorFormComponent } from './descriptor-form.component';

describe('DescriptorFormComponent', () => {
  let component: DescriptorFormComponent;
  let fixture: ComponentFixture<DescriptorFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptorFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
