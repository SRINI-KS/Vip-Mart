import { TestBed } from '@angular/core/testing';

import { UserAuthGuardsGuard } from './user-auth-guards.guard';

describe('UserAuthGuardsGuard', () => {
  let guard: UserAuthGuardsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAuthGuardsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
