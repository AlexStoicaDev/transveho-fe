import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Car } from '../../models/car.model';

const CARS_ENDPOINT = 'cars';
const SLASH = '/';

@Injectable()
export class OccCarsService {
  constructor(private readonly http: HttpClient) {}

  private static getUpdateAndDeleteCarEndpoint(carPlateNumber: string) {
    return CARS_ENDPOINT + SLASH + carPlateNumber;
  }

  public getAllCars(): Observable<Car[]> {
    return this.http
      .get<Car[]>(CARS_ENDPOINT)
      .pipe(catchError(err => throwError(err)));
  }

  public createCar(newCar: Car): Observable<Car> {
    return this.http
      .post<Car>(CARS_ENDPOINT, newCar)
      .pipe(catchError(err => throwError(err)));
  }

  public updateCar(plateNumber: string, car: Car): Observable<Car> {
    return this.http
      .put<Car>(OccCarsService.getUpdateAndDeleteCarEndpoint(plateNumber), car)
      .pipe(catchError(err => throwError(err)));
  }

  public deleteCar(carPlateNumber: string): Observable<any> {
    return this.http
      .delete(OccCarsService.getUpdateAndDeleteCarEndpoint(carPlateNumber))
      .pipe(catchError(err => throwError(err)));
  }
}
