import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild
} from '@angular/core';
import { Passenger, Route } from '@transveho-core';
import { PassengerFormComponent } from '../passenger-form/passenger-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface EditPassengerModalData {
  passenger: Passenger;
  routes: Route[];
}

@Component({
  selector: 'edit-passenger-modal',
  templateUrl: './edit-passenger-modal.component.html',
  styleUrls: ['./edit-passenger-modal.component.scss']
})
export class EditPassengerModalComponent implements AfterViewInit {
  @ViewChild(PassengerFormComponent)
  passengerFormComponent: PassengerFormComponent;

  constructor(
    public dialogRef: MatDialogRef<EditPassengerModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditPassengerModalData,
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
      action: 'update',
      editedPassenger: this.passengerFormComponent.getPassengerFromFormControls()
    });
  }

  onEditButtonClick() {
    if (this.isPassengerFormValid()) {
      this.dialogRef.close({
        action: 'update',
        editedPassenger: this.passengerFormComponent.getPassengerFromFormControls()
      });
    }
  }
}
