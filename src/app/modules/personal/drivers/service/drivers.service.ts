import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver, OccDriversService } from '@transveho-core';
import { OccUsersService } from '../../../../core/occ/services/users/occ-users.service';

@Injectable()
export class DriversService {
  constructor(
    private readonly occUsersService: OccUsersService,
    private readonly occDriversService: OccDriversService
  ) {}

  public loadAllDrivers(): Observable<Driver[]> {
    return this.occDriversService.getAllDrivers();
  }

  public deleteDriver(username: string): Observable<any> {
    return this.occUsersService.deleteUser(username);
  }
}
