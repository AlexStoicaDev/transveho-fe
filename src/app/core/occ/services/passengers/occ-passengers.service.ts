import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Passenger } from '@transveho-core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const PASSENGERS_ENDPOINT = 'passengers';
const CO_PASSENGERS_ENDPOINT = 'co-selectedPassengers';
const ALL = 'all';
const SLASH = '/';

@Injectable()
export class OccPassengersService {
  constructor(private readonly http: HttpClient) {}

  //TODO MAKE ALL GET ENDPOINT METHODS LIKE THIS
  private getPassengerEndpoint = (id: number) =>
    PASSENGERS_ENDPOINT + SLASH + id;

  public getAllPassengers(): Observable<Passenger[]> {
    return this.http
      .get<Passenger[]>(PASSENGERS_ENDPOINT)
      .pipe(catchError(err => throwError(err)));
  }

  public createPassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .post<Passenger>(PASSENGERS_ENDPOINT, passenger)
      .pipe(catchError(err => throwError(err)));
  }

  public updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.http
      .put<Passenger>(PASSENGERS_ENDPOINT, passenger)
      .pipe(catchError(err => throwError(err)));
  }

  public deletePassenger(passengerId: number): Observable<void> {
    return this.http
      .delete<any>(this.getPassengerEndpoint(passengerId))
      .pipe(catchError(err => throwError(err)));
  }
}
