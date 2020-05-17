import { TestBed } from '@angular/core/testing';

import { DispatchersService } from './dispatchers.service';

describe('DispatchersService', () => {
  let service: DispatchersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispatchersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
