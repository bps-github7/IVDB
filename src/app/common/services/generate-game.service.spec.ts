import { TestBed } from '@angular/core/testing';

import { GenerateGameService } from './generate-game.service';

describe('GenerateGameService', () => {
  let service: GenerateGameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenerateGameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
