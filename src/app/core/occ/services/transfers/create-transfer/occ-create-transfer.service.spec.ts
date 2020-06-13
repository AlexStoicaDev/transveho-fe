import { TestBed } from '@angular/core/testing';

import { OccCreateTransferService } from './occ-create-transfer.service';

describe('OccCreateTransferService', () => {
  let service: OccCreateTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccCreateTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
