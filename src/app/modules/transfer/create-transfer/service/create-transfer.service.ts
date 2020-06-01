import { Injectable } from '@angular/core';
import {
  CreateTransferData,
  CreateTransferStepperData,
  OccCreateTransferService,
  SelectedPassengers
} from '@transveho-core';
import { Observable } from 'rxjs';

@Injectable()
export class CreateTransferService {
  constructor(
    private readonly occCreateTransferService: OccCreateTransferService
  ) {}

  public createTransfer(
    createTransferData: CreateTransferData
  ): Observable<any> {
    return this.occCreateTransferService.createTransfer(createTransferData);
  }

  public getCreateTransferStepperData(
    selectedPassengers: SelectedPassengers
  ): Observable<CreateTransferStepperData> {
    return this.occCreateTransferService.getCreateTransferStepperData(
      selectedPassengers
    );
  }
}
