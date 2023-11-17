import { TestBed } from '@angular/core/testing';

import { GmpCommonService } from './gmp-common.service';

describe('GmpCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GmpCommonService = TestBed.get(GmpCommonService);
    expect(service).toBeTruthy();
  });
});
