import { TestBed } from '@angular/core/testing';

import { FakeHistoryService } from './fake-history.service';

describe('FakeHistoryService', () => {
  let service: FakeHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakeHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
