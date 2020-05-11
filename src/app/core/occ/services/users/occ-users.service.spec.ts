import { TestBed } from '@angular/core/testing';

import { OccUsersService } from './occ-users.service';

describe('OccUsersService', () => {
  let service: OccUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
