import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Car, Passenger, Personal, Route } from '@transveho-core';
import { FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { CreateTransferService } from './service/create-transfer.service';

@Component({
  selector: 'create-transfer',
  templateUrl: './create-transfer.component.html',
  styleUrls: ['./create-transfer.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
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
  selectedCar: Car = null;
  selectedDriver: Personal = null;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private createTransferService: CreateTransferService
  ) {
    this.selectedPassengers = this.activatedRoute.snapshot.data.createTransferStepperData.selectedPassengers;
    this.selectedRoute = this.activatedRoute.snapshot.data.createTransferStepperData.selectedRoute;
    this.availableCars = this.activatedRoute.snapshot.data.createTransferStepperData.availableCars;
    this.availableDrivers = this.activatedRoute.snapshot.data.createTransferStepperData.availableDrivers;
    this.totalNumberOfAdults = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfAdults;
    this.totalNumberOfChildren = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfChildren;
    this.totalNumberOfInfants = this.activatedRoute.snapshot.data.createTransferStepperData.totalNumberOfInfants;
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
    this.selectedCar = selectedCar;
  }

  onSelectDriver(selectedDriver: Personal) {
    this.selectedDriver = selectedDriver;
  }

  onCreateTransfer() {
    this.createTransferService
      .createTransfer({
        selectedCarId: this.selectedCar.id,
        selectedDriverId: this.selectedDriver.id,
        selectedPassengersIds: this.selectedPassengers.map(
          selectedPassenger => selectedPassenger.id
        ),
        selectedRouteId: this.selectedRoute.id
      })
      .subscribe(() => {
        this.router.navigate(['passengers']);
      });
  }
}
