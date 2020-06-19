import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../../../authentication';
import {Observable, of, pipe, throwError} from 'rxjs';
import {
  Car, CurrentTransfer,
  EngineType,
  Passenger,
  PaymentMethod,
  Route,
  Transfer
} from '../../../models';
import { DatePipe } from '@angular/common';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/operators";


@Injectable()
export class OccDriverTransferService {
  constructor(private authenticationService: AuthenticationService,private http:HttpClient) {}

  getCurrentTransfer(): Observable<CurrentTransfer> {
    const driverId = this.authenticationService.currentUserValue.id;
    return this.http.get<CurrentTransfer>("transfers/current/"+driverId).pipe(catchError(err => throwError(err)));
  }
}
