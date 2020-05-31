import { TestBed } from '@angular/core/testing';

import { CreateTransferService } from './create-transfer.service';

describe('CreateTransferService', () => {
  let service: CreateTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
