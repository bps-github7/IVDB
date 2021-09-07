import { TestBed } from '@angular/core/testing';

import { DisplayNameUniqueService } from './display-name-unique.service';

describe('DisplayNameUniqueService', () => {
  let service: DisplayNameUniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisplayNameUniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
