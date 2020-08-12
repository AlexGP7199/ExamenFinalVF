import { TestBed } from '@angular/core/testing';

import { AuthGdGuard } from './auth-gd.guard';

describe('AuthGdGuard', () => {
  let guard: AuthGdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthGdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
