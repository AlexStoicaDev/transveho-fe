import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Transfer } from '@transveho-core';
import { catchError } from 'rxjs/operators';

const TRANSFERS_ENDPOINT = 'transfers';
const SLASH = '/';

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) {}

  public getAllTransfers(): Observable<Transfer[]> {
    return this.http
      .get<Transfer[]>(TRANSFERS_ENDPOINT)
      .pipe(catchError(err => throwError(err)));
  }
}
