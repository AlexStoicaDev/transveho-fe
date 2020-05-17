import { Injectable } from '@angular/core';
import {
  OccDispatchersService,
  OccUsersService,
  Personal
} from '@transveho-core';
import { Observable } from 'rxjs';

@Injectable()
export class DispatchersService {
  constructor(
    private readonly occUsersService: OccUsersService,
    private readonly occDispatchersService: OccDispatchersService
  ) {}

  public loadAllDispatchers(): Observable<Personal[]> {
    return this.occDispatchersService.getAllDispatchers();
  }

  public deleteDispatcher(username: string): Observable<any> {
    return this.occUsersService.deleteUser(username);
  }

  public updateDispatcher(
    id: number,
    username: string,
    dispatcher: Personal
  ): Observable<any> {
    return this.occUsersService.updateUser(id, username, dispatcher);
  }

  public createDispatcher(dispatcher: Personal): Observable<any> {
    return this.occUsersService.createUser(dispatcher);
  }
}
