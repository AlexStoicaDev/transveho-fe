import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Transfer } from '@transveho-core';
import { CurrentTransferService } from '../service/current-transfer.service';
import { Observable } from 'rxjs';

@Injectable()
export class CurrentTransferResolver implements Resolve<Transfer> {
  constructor(private currentTransferService: CurrentTransferService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Transfer> {
    return this.currentTransferService.getCurrentTransfer();
  }
}
