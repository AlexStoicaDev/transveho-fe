import { TestBed } from '@angular/core/testing';
import { OccDriversService } from './occ-drivers.service';

describe('OccDriversService', () => {
  let service: OccDriversService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccDriversService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
