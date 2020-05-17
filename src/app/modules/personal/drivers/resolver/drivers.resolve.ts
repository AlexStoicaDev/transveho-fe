import { Injectable } from '@angular/core';
import { Personal } from '@transveho-core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DriversService } from '../service/drivers.service';
import { Observable } from 'rxjs';

@Injectable()
export class DriversResolve implements Resolve<Personal[]> {
  constructor(private driversService: DriversService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Personal[]> {
    return this.driversService.loadAllDrivers();
  }
}
