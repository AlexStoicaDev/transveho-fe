import { Injectable } from '@angular/core';
import { CreateTransferStepperData } from '@transveho-core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { CreateTransferService } from '../service/create-transfer.service';

@Injectable()
export class CreateTransferResolver
  implements Resolve<CreateTransferStepperData> {
  constructor(private createTransferService: CreateTransferService) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<CreateTransferStepperData> {
    return this.createTransferService.getCreateTransferStepperData({
      selectedPassengersIds: Object.values(route.params.selectedPassengersIds)
        .map(value => value.toString())
        .filter(value => value !== ','),
      routeId: route.params.routeId
    });
  }
}
