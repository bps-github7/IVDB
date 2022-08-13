import { TestBed } from '@angular/core/testing';

import { GameInfoSelectedService } from './game-info-selected.service';

describe('GameInfoSelectedService', () => {
  let service: GameInfoSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameInfoSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
