import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const USERS_ENDPOINT = 'users';
const DISPATCHERS_ENDPOINT = 'dispatchers';
const SLASH = '/';

@Injectable()
export class OccDispatchersService {
  constructor(private http: HttpClient) {}

  private static getAllDispatchersEndpoint(): string {
    return USERS_ENDPOINT + SLASH + DISPATCHERS_ENDPOINT;
  }

  public getAllDispatchers(): Observable<any> {
    return this.http
      .get(OccDispatchersService.getAllDispatchersEndpoint())
      .pipe(catchError((error: any) => throwError(error)));
  }
}
