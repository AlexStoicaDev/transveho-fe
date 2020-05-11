import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";

const USERS_ENDPOINT =  'users';
const DRIVERS_ENDPOINT =  'drivers';
const SLASH = '/';

@Injectable()
export class OccDriversService {

  constructor(
   private http: HttpClient
  ) {
  }

  private static getAllDriversEndpoint():string{
      return USERS_ENDPOINT + SLASH + DRIVERS_ENDPOINT;
  }

  public getAllDrivers(): Observable<any> {
    debugger
    return this.http.get(OccDriversService.getAllDriversEndpoint()).pipe(catchError((error:any)=>throwError(error)));
  }
}
