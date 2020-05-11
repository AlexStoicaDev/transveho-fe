import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {ELEMENT_DATA_1, ELEMENT_DATA_2} from './mock-data';
import {Driver, OccDriversService, PersonalEntriesPage} from '@transveho-core';
import {map} from "rxjs/operators";

@Injectable()
export class DriversService {
  constructor(private readonly occDriversService: OccDriversService) {}

  public loadPaginatedEntries(page: number): Observable<PersonalEntriesPage> {
    let result: Observable<PersonalEntriesPage>;
    if (page === 0) {
      result = of({ dispatcherEntries: ELEMENT_DATA_1, pageNumber: 0 });
    } else {
      result = of({ dispatcherEntries: ELEMENT_DATA_2, pageNumber: 1 });
    }
    return result;
  }

  public loadAllDrivers():Observable<Driver[]>{
    return this.occDriversService.getAllDrivers().pipe(map(response=>{
      console.log(response);
      debugger
      return response;
    }));
  }
}
