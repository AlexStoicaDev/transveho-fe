import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car, CarStatus, EngineType } from '@transveho-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//TODO fix datepicker bug, date that is saved in db is one day before selected date, and date is displayed mm/dd/yyyy -> should be dd/mm/yyyy
@Component({
  selector: 'car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.scss']
})
export class CarFormComponent implements OnInit {
  @Input()
  car: Car;
  carFormGroup: FormGroup;
  engineTypes: Array<string> = [];
  carStatuses: Array<string> = [];

  @Output() onSubmitOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.addValuesToEngineTypesArray();
    this.addValuesToCarStatusesArray();
  }

  ngOnInit(): void {
    this.carFormGroup = this.formBuilder.group(this.getControlsConfig());
  }

  addValuesToEngineTypesArray() {
    for (let value in EngineType) {
      if (typeof EngineType[value] === 'number') {
        this.engineTypes.push(value);
      }
    }
  }

  addValuesToCarStatusesArray() {
    for (let value in CarStatus) {
      if (typeof CarStatus[value] === 'number') {
        this.carStatuses.push(value);
      }
    }
  }

  private getControlsConfig() {
    return {
      plateNumber: [
        this.car.plateNumber,
        [Validators.required, Validators.minLength(4), Validators.maxLength(12)]
      ],
      model: [this.car.model, [Validators.required, Validators.maxLength(30)]],
      numberOfSeats: [
        this.car.numberOfSeats,
        [Validators.required, Validators.min(0)]
      ],
      chassisNumber: [
        this.car.chassisNumber,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      rented: [this.car.rented.toString()],
      inTransit: [this.car.inTransit.toString()],
      engineType: [this.car.engineType, Validators.required],
      status: [this.car.status, Validators.required],
      itpExpirationDate: [this.car.itpExpirationDate, Validators.required],
      rovignetteExpirationDate: [
        this.car.rovignetteExpirationDate,
        Validators.required
      ],
      huvignetteExpirationDate: [
        this.car.huvignetteExpirationDate,
        Validators.required
      ],
      rcaExpirationDate: [this.car.rcaExpirationDate, Validators.required],
      others: [
        this.car.others,
        [Validators.minLength(3), Validators.maxLength(255)]
      ]
    };
  }

  isCarFormValid(): boolean {
    return this.carFormGroup.valid;
  }

  getCarFromFormControls(): Car {
    const carFormControls = this.carFormGroup.controls;
    return {
      id: this.car.id,
      plateNumber: carFormControls.plateNumber.value,
      model: carFormControls.model.value,
      numberOfSeats: carFormControls.numberOfSeats.value,
      chassisNumber: carFormControls.chassisNumber.value,
      engineType: carFormControls.engineType.value,
      rented: carFormControls.rented.value === 'true',
      inTransit: carFormControls.inTransit.value === 'true',
      status: carFormControls.status.value,
      itpExpirationDate: carFormControls.itpExpirationDate.value,
      rovignetteExpirationDate: carFormControls.rovignetteExpirationDate.value,
      huvignetteExpirationDate: carFormControls.huvignetteExpirationDate.value,
      rcaExpirationDate: carFormControls.rcaExpirationDate.value,
      others: carFormControls.others.value
    };
  }

  onSubmit() {
    if (this.isCarFormValid()) {
      this.onSubmitOutput.emit();
    }
  }
}
