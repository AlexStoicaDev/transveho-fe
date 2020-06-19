import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CurrentTransfer} from '@transveho-core';
import {CurrentTransferService} from '../service/current-transfer.service';
import {Observable} from 'rxjs';

@Injectable()
export class CurrentTransferResolver implements Resolve<CurrentTransfer> {
  constructor(private currentTransferService: CurrentTransferService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CurrentTransfer> {
    return this.currentTransferService.getCurrentTransfer();
  }
}
