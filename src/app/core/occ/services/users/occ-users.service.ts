import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

const USERS_ENDPOINT = 'users';
const SLASH = '/';

@Injectable()
export class OccUsersService {
  constructor(private http: HttpClient) {}

  private static getDeleteUserEndpoint(username: string): string {
    return USERS_ENDPOINT + SLASH + username;
  }

  public deleteUser(username: string): Observable<any> {
    return this.http
      .delete(OccUsersService.getDeleteUserEndpoint(username))
      .pipe(catchError((error: any) => throwError(error)));
  }
}
