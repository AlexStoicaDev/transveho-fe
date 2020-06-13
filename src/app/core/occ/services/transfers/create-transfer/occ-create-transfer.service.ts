import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  CreateTransferData,
  CreateTransferStepperData,
  SelectedPassengers
} from '../../../models/create-transfer.model';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const CREATE_TRANSFER_ENDPOINT = 'transfers';
const STEPPER_DATA = 'stepper-data';
const SLASH = '/';

@Injectable()
export class OccCreateTransferService {
  constructor(private readonly http: HttpClient) {}

  private getCreateTransferStepperDataEndpoint = () =>
    CREATE_TRANSFER_ENDPOINT + SLASH + STEPPER_DATA;

  public createTransfer(
    createTransferData: CreateTransferData
  ): Observable<any> {
    return this.http
      .post<CreateTransferData>(CREATE_TRANSFER_ENDPOINT, createTransferData)
      .pipe(catchError(err => throwError(err)));
  }

  public getCreateTransferStepperData(
    selectedPassengers: SelectedPassengers
  ): Observable<CreateTransferStepperData> {
    let params = new HttpParams()
      .append('routeId', selectedPassengers.routeId.toString())
      .append(
        'selectedPassengersIds',
        selectedPassengers.selectedPassengersIds.join(', ')
      );
    return this.http
      .get<CreateTransferStepperData>(
        this.getCreateTransferStepperDataEndpoint(),
        {
          params
        }
      )
      .pipe(catchError(err => throwError(err)));
  }
}
