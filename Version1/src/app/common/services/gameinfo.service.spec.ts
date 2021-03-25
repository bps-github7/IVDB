import { TestBed } from '@angular/core/testing';

import { GameInfoService } from './gameinfo.service';

describe('GameInfoService', () => {
  let service: GameInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
