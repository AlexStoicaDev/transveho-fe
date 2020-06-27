import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {CurrentTransfer} from "@transveho-core";

@Component({
  selector: 'previous-transfers',
  templateUrl: './previous-transfers.component.html',
  styleUrls: ['./previous-transfers.component.scss']
})
export class PreviousTransfersComponent {

  previousTransfers:CurrentTransfer[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
  ) {
    this.previousTransfers = this.activatedRoute.snapshot.data.previousTransfers;
    debugger
  }

}
