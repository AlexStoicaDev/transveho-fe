import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { Car } from '@transveho-core';
import { CarFormComponent } from '../car-form/car-form.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'create-car-modal',
  templateUrl: './create-car-modal.component.html',
  styleUrls: ['./create-car-modal.component.scss']
})
export class CreateCarModalComponent implements AfterViewInit {
  @ViewChild(CarFormComponent) carFormComponent: CarFormComponent;

  emptyCar: Car = {
    chassisNumber: '',
    engineType: undefined,
    huvignetteExpirationDate: undefined,
    inTransit: false,
    rented: false,
    itpExpirationDate: undefined,
    model: '',
    numberOfSeats: 0,
    others: '',
    plateNumber: '',
    rcaExpirationDate: undefined,
    rovignetteExpirationDate: undefined,
    status: undefined,
    id: 0
  };

  constructor(
    public dialogRef: MatDialogRef<CreateCarModalComponent>,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  isUserFormValid(): boolean {
    return this.carFormComponent && this.carFormComponent.isCarFormValid();
  }

  onEnterSubmit($event) {
    this.dialogRef.close({
      action: 'create',
      newUser: this.carFormComponent.getCarFromFormControls()
    });
  }

  onCreateButtonClick() {
    if (this.isUserFormValid()) {
      this.dialogRef.close({
        action: 'create',
        newUser: this.carFormComponent.getCarFromFormControls()
      });
    }
  }
}
