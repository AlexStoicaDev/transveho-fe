import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Car } from '@transveho-core';
import { CarsService } from '../service/cars.service';
import { Observable } from 'rxjs';

@Injectable()
export class CarsResolver implements Resolve<Car[]> {
  constructor(private readonly carsService: CarsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Car[]> {
    return this.carsService.getAllCars();
  }
}
