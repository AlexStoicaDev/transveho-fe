import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  ViewChild
} from '@angular/core';
import { Car } from '@transveho-core';
import { CarFormComponent } from '../car-form/car-form.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface EditCarModalData {
  car: Car;
}

@Component({
  selector: 'edit-car-modal',
  templateUrl: './edit-car-modal.component.html',
  styleUrls: ['./edit-car-modal.component.scss']
})
export class EditCarModalComponent implements AfterViewInit {
  @ViewChild(CarFormComponent) carFormComponent: CarFormComponent;

  constructor(
    public dialogRef: MatDialogRef<EditCarModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EditCarModalData,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit(): void {
    this.cdRef.detectChanges();
  }

  onCancelClick(): void {
    this.dialogRef.close('cancel');
  }

  isCarFormValid(): boolean {
    return this.carFormComponent && this.carFormComponent.isCarFormValid();
  }

  onEnterSubmit($event) {
    this.dialogRef.close({
      action: 'update',
      editedCar: this.carFormComponent.getCarFromFormControls()
    });
  }

  onEditButtonClick() {
    if (this.isCarFormValid()) {
      this.dialogRef.close({
        action: 'update',
        editedCar: this.carFormComponent.getCarFromFormControls()
      });
    }
  }
}
