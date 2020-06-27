import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve} from '@angular/router';
import {CurrentTransfer} from '@transveho-core';
import {Observable} from 'rxjs';
import {PreviousTransfersService} from "../service/previous-transfers.service";

@Injectable()
export class PreviousTransfersResolver implements Resolve<CurrentTransfer[]> {
  constructor(private previousTransfersService: PreviousTransfersService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<CurrentTransfer[]> {
    return this.previousTransfersService.getPreviousTransfers();
  }
}
