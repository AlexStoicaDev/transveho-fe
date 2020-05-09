import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA_1, ELEMENT_DATA_2 } from './mock-data';
import { DashboardEntryPage } from '@transveho-core';

@Injectable()
export class DashboardService {
  constructor(private _httpClient: HttpClient) {}

  public loadPaginatedEntries(page: number): Observable<DashboardEntryPage> {
    let result: Observable<DashboardEntryPage>;
    if (page === 0) {
      result = of({ dashboardEntries: ELEMENT_DATA_1, pageNumber: 0 });
    } else {
      result = of({ dashboardEntries: ELEMENT_DATA_2, pageNumber: 1 });
    }
    return result;
  }
}
