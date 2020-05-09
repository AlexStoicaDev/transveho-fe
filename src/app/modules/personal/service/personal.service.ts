import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ELEMENT_DATA_1, ELEMENT_DATA_2 } from './mock-data';
import { PersonalEntriesPage } from '@transveho-core';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(private _httpClient: HttpClient) {}

  public loadPaginatedEntries(page: number): Observable<PersonalEntriesPage> {
    let result: Observable<PersonalEntriesPage>;
    if (page === 0) {
      result = of({ dispatcherEntries: ELEMENT_DATA_1, pageNumber: 0 });
    } else {
      result = of({ dispatcherEntries: ELEMENT_DATA_2, pageNumber: 1 });
    }
    return result;
  }
}
