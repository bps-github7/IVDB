import { TestBed } from '@angular/core/testing';

import { ConsoleSelectedService } from './console-selected.service';

describe('ConsoleSelectedService', () => {
  let service: ConsoleSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
