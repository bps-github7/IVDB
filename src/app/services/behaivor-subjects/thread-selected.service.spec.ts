import { TestBed } from '@angular/core/testing';

import { ThreadSelectedService } from './thread-selected.service';

describe('ThreadSelectedService', () => {
  let service: ThreadSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThreadSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
