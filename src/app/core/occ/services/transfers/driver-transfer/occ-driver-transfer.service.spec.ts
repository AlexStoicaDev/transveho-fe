import { TestBed } from '@angular/core/testing';

import { OccDriverTransferService } from './occ-driver-transfer.service';

describe('OccDriverTransferService', () => {
  let service: OccDriverTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccDriverTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
