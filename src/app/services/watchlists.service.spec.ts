import { TestBed } from '@angular/core/testing';

import { WatchlistsService } from './watchlists.service';

describe('WatchlistsService', () => {
  let service: WatchlistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchlistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
