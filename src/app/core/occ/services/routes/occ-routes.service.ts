import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Route } from '@transveho-core';
import { catchError } from 'rxjs/operators';

const ROUTES_ENDPOINT = 'routes';
const SLASH = '/';

@Injectable()
export class OccRoutesService {
  constructor(private readonly http: HttpClient) {}

  public getAllRoutes(): Observable<Route[]> {
    return this.http
      .get<Route[]>(ROUTES_ENDPOINT)
      .pipe(catchError(err => throwError(err)));
  }

  public createRoute(newRoute: Route): Observable<Route> {
    return this.http
      .post<Route>(ROUTES_ENDPOINT, newRoute)
      .pipe(catchError(err => throwError(err)));
  }

  public updateRoute(route: Route): Observable<Route> {
    return this.http
      .put<Route>(ROUTES_ENDPOINT, route)
      .pipe(catchError(err => throwError(err)));
  }

  public deleteRoute(routeId: number): Observable<any> {
    return this.http
      .delete(ROUTES_ENDPOINT + SLASH + routeId)
      .pipe(catchError(err => throwError(err)));
  }
}
