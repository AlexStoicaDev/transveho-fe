import { TestBed } from '@angular/core/testing';

import { OccDispatchersService } from './occ-dispatchers.service';

describe('OccDispatchersService', () => {
  let service: OccDispatchersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccDispatchersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
