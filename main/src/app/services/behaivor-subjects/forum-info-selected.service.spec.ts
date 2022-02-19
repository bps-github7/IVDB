import { TestBed } from '@angular/core/testing';

import { ForumInfoSelectedService } from './forum-info-selected.service';

describe('ForumInfoSelectedService', () => {
  let service: ForumInfoSelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumInfoSelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
