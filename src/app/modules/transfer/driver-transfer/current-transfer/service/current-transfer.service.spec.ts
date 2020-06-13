import { TestBed } from '@angular/core/testing';

import { CurrentTransferService } from './current-transfer.service';

describe('CurrentTransferService', () => {
  let service: CurrentTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
