import { TestBed } from '@angular/core/testing';

import { AuthFunctionService } from './auth-function.service';

describe('AuthFunctionService', () => {
  let service: AuthFunctionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthFunctionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
