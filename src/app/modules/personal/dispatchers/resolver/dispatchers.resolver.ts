import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Personal } from '@transveho-core';
import { DispatchersService } from '../service/dispatchers.service';
import { Observable } from 'rxjs';

@Injectable()
export class DispatchersResolver implements Resolve<Personal[]> {
  constructor(private readonly dispatchersService: DispatchersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Personal[]> {
    return this.dispatchersService.loadAllDispatchers();
  }
}
