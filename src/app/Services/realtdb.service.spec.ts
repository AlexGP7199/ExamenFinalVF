import { TestBed } from '@angular/core/testing';

import { RealtdbService } from './realtdb.service';

describe('RealtdbService', () => {
  let service: RealtdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealtdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
