import {Injectable} from '@angular/core';
import {CurrentTransfer, OccDriverTransferService} from "@transveho-core";
import {Observable} from "rxjs";

@Injectable()
export class PreviousTransfersService {

  constructor(
    private readonly occDriverTransferService: OccDriverTransferService) {
  }

  getPreviousTransfers():Observable<CurrentTransfer[]> {
    return this.occDriverTransferService.getPreviousTransfers();

  }
}
