import { TestBed } from '@angular/core/testing';

import { OccRoutesService } from './occ-routes.service';

describe('OccRoutesService', () => {
  let service: OccRoutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccRoutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
