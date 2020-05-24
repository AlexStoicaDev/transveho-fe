import { TestBed } from '@angular/core/testing';

import { OccPassengersService } from './occ-passengers.service';

describe('OccPassengersService', () => {
  let service: OccPassengersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccPassengersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
