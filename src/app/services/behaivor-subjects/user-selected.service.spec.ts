import { TestBed } from '@angular/core/testing';

import { UserSelectedService } from './user-selected.service';

describe('UserSelectedService', () => {
  let service: UserSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
