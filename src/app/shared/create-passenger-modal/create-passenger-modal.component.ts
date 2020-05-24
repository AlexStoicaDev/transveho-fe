import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild
} from '@angular/core';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Passenger, Route } from '@transveho-core';
import { emptyPassenger } from './empty-create-passenger';

//TODO move the components into a common place and make only one instance of this interface
export interface PassengerModalData {
  routes: Route[];
}

@Component({
  selector: 'create-passenger-modal',
  templateUrl: './create-passenger-modal.component.html',
  styleUrls: ['./create-passenger-modal.component.scss']
})
export class CreatePassengerModalComponent implements AfterViewInit {
  @ViewChild(PassengerFormComponent)
  passengerFormComponent: PassengerFormComponent;
  emptyCreatePassenger: Passenger = emptyPassenger;

  constructor(
    public dialogRef: MatDialogRef<CreatePassengerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PassengerModalData,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  isPassengerFormValid(): boolean {
    return (
      this.passengerFormComponent &&
      this.passengerFormComponent.isPassengerFormValid()
    );
  }

  onEnterSubmit($event) {
    this.dialogRef.close({
      action: 'create',
      newPassenger: this.passengerFormComponent.getPassengerFromFormControls()
    });
  }

  onCreateButtonClick() {
    if (this.isPassengerFormValid()) {
      this.dialogRef.close({
        action: 'create',
        newPassenger: this.passengerFormComponent.getPassengerFromFormControls()
      });
    }
  }
}
