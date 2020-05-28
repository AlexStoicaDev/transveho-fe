import { Injectable } from '@angular/core';
import { Passenger } from '@transveho-core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { PassengersService } from '../../passengers/service/passengers.service';
import { Observable } from 'rxjs';

@Injectable()
export class CreateTransferResolver implements Resolve<Passenger[]> {
  constructor(private readonly passengersService: PassengersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Passenger[]> {
    return this.passengersService.getAllPassengers();
  }
}
