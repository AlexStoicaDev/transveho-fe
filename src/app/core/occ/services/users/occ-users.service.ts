import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Personal } from '@transveho-core';

const USERS_ENDPOINT = 'users';
const SLASH = '/';

@Injectable()
export class OccUsersService {
  constructor(private http: HttpClient) {}

  private static getDeleteUserEndpoint(username: string): string {
    return USERS_ENDPOINT + SLASH + username;
  }

  private static getUpdateUserEndpoint(id: number): string {
    return USERS_ENDPOINT + SLASH + id;
  }

  public deleteUser(username: string): Observable<any> {
    return this.http
      .delete(OccUsersService.getDeleteUserEndpoint(username))
      .pipe(catchError((error: any) => throwError(error)));
  }

  public updateUser(
    id: number,
    username: string,
    user: Personal
  ): Observable<any> {
    let params = new HttpParams().append('username', username);
    return this.http
      .put<Personal>(OccUsersService.getUpdateUserEndpoint(id), user, {
        params: params
      })
      .pipe(catchError((error: any) => throwError(error)));
  }

  public createUser(userRole: string, user: Personal): Observable<any> {
    let params = new HttpParams().append('userRole', userRole);
    return this.http
      .post<Personal>(USERS_ENDPOINT, user, {
        params: params
      })
      .pipe(catchError((error: any) => throwError(error)));
  }
}
