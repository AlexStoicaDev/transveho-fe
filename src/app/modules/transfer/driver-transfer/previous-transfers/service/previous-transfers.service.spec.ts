import { TestBed } from '@angular/core/testing';

import { PreviousTransfersService } from './previous-transfers.service';

describe('PreviousTransfersService', () => {
  let service: PreviousTransfersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviousTransfersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
