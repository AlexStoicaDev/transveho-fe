import { Injectable } from '@angular/core';
import { Route } from '@transveho-core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RoutesService } from '../service/routes.service';

@Injectable()
export class RoutesResolver implements Resolve<Route[]> {
  constructor(private readonly routesService: RoutesService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Route[]> {
    return this.routesService.getAllRoutes();
  }
}
