import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../../../authentication';
import { Observable, of, pipe } from 'rxjs';
import {
  Car,
  EngineType,
  Passenger,
  PaymentMethod,
  Route,
  Transfer
} from '../../../models';
import { DatePipe } from '@angular/common';

@Injectable()
export class OccDriverTransferService {
  constructor(private authenticationService: AuthenticationService) {}

  private getCurrentUserUsername(): string {
    return this.authenticationService.currentUserValue.username;
  }

  getCurrentTransfer(): Observable<Transfer> {
    // @ts-ignore
    return of({});
  }
}
