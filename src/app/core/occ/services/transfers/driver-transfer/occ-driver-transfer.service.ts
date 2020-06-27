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

  startTransfer(passengerId: number,carId:number):Observable<any> {
    const driverId = this.authenticationService.currentUserValue.id;
    return this.http.put<any>(`transfers/current/start/${passengerId}/${carId}/${driverId}`,{}).pipe(catchError(err => throwError(err)));
  }

  finishTransfer(passengerId: number, carId: number) :Observable<any> {
    const driverId = this.authenticationService.currentUserValue.id;
    return this.http.put<any>(`transfers/current/finish/${passengerId}/${carId}/${driverId}`,{}).pipe(catchError(err => throwError(err)));
  }

  getPreviousTransfers():Observable<CurrentTransfer[]> {
    const driverId = this.authenticationService.currentUserValue.id;
    return this.http.get<CurrentTransfer[]>("transfers/"+driverId).pipe(catchError(err => throwError(err)));
  }

}
