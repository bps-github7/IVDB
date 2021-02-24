import { TestBed } from '@angular/core/testing';

import { ConsoleMakersService } from './console-makers.service';

describe('ConsoleMakersService', () => {
  let service: ConsoleMakersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoleMakersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
