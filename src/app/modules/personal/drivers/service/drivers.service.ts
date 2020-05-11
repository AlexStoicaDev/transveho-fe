import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver, OccDriversService } from '@transveho-core';

@Injectable()
export class DriversService {
  constructor(private readonly occDriversService: OccDriversService) {}

  public loadAllDrivers(): Observable<Driver[]> {
    return this.occDriversService.getAllDrivers();
  }
}
