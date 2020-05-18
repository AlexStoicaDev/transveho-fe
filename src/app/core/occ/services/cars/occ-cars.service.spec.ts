import { TestBed } from '@angular/core/testing';

import { OccCarsService } from './occ-cars.service';

describe('OccCarsService', () => {
  let service: OccCarsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccCarsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
