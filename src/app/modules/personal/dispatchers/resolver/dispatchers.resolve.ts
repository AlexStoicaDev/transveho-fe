import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Personal } from '@transveho-core';
import { DispatchersService } from '../service/dispatchers.service';
import { Observable } from 'rxjs';

@Injectable()
export class DispatchersResolve implements Resolve<Personal[]> {
  constructor(private readonly dispatchersService: DispatchersService) {}

  resolve(): Observable<Personal[]> {
    return this.dispatchersService.loadAllDispatchers();
  }
}
