import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Car, Passenger, Personal, Route} from '@transveho-core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CreateTransferService} from './service/create-transfer.service';

@Component({
  selector: 'create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false}
    }
  ]
})
export class CreateTransferComponent {
  totalNumberOfAdults: number;
  totalNumberOfChildren: number;
  totalNumberOfInfants: number;
  selectedPassengers: Passenger[];
  selectedRoute: Route;
  availableCars: Car[];
  availableDrivers: Personal[];
  selectedDriver: Personal = null;

  selectCarFormGroup: FormGroup;
  selectedDriverFormGroup: FormGroup;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private createTransferService: CreateTransferService
  ) {
    this.selectedPassengers = this.activatedRoute.snapshot.data.createTransferStepperData.selectedPassengers;
    this.selectedRoute = this.activatedRoute.snapshot.data.createTransferStepperData.selectedRoute;
    this.availableCars = this.activatedRoute.snapshot.data.createTransferStepperData.availableCars;
    this.availableDrivers = this.activatedRoute.snapshot.data.createTransferStepperData.availableDrivers;
    this.totalNumberOfAdults = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfAdults;
    this.totalNumberOfChildren = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfChildren;
    this.totalNumberOfInfants = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfInfants;

    this.selectCarFormGroup = this.formBuilder.group({
      selectCarControl: [undefined, Validators.required]
    });

    this.selectedDriverFormGroup = this.formBuilder.group({
      selectDriverControl: [undefined, Validators.required]
    });
  }

  onRemovePassenger(removePassenger: Passenger) {
    this.totalNumberOfInfants -= removePassenger.numberOfInfants;
    this.totalNumberOfChildren -= removePassenger.numberOfChildren;
    this.totalNumberOfAdults -= removePassenger.numberOfAdults;
    this.selectedPassengers = this.selectedPassengers.filter(
      passenger => passenger !== removePassenger
    );
  }

  onSelectCar(selectedCar: Car) {
    this.selectCarFormGroup.controls['selectCarControl'].setValue(selectedCar);
  }

  onSelectDriver(selectedDriver: Personal) {
    this.selectedDriverFormGroup.controls['selectDriverControl'].setValue(selectedDriver);

  }

  onCreateTransfer() {
    this.createTransferService
      .createTransfer({
        selectedCarId: this.selectCarFormGroup.controls['selectCarControl'].value.id,
        selectedDriverId: this.selectedDriverFormGroup.controls['selectDriverControl'].value.id,
        selectedPassengersIds: this.selectedPassengers.map(
          selectedPassenger => selectedPassenger.id
        ),
        selectedRouteId: this.selectedRoute.id
      })
      .subscribe(() => {
        this.router.navigate(['']);
      });
  }
}
