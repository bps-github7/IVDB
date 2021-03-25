import { TestBed } from '@angular/core/testing';

import { ForumInfoService } from './forum-info.service';

describe('ForumInfoService', () => {
  let service: ForumInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ForumInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
