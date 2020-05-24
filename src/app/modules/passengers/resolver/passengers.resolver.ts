import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PassengersService } from '../service/passengers.service';
import { Observable } from 'rxjs';
import { Passenger } from '@transveho-core';

@Injectable()
export class PassengersResolver implements Resolve<Passenger[]> {
  constructor(private readonly passengersService: PassengersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Passenger[]> {
    return this.passengersService.getAllPassengers();
  }
}
