import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, Passenger, Personal, Route } from '@transveho-core';
import { FormBuilder } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

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
  totalNumberOfAdults = 6;
  totalNumberOfChildren = 5;
  totalNumberOfInfants = 4;
  passengers: Passenger[];
  routes: Route[];
  cars: Car[];
  drivers: Personal[];
  selectedCar: Car;
  selectedDriver: Personal;

  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.passengers = this.route.snapshot.data.passengers;
    this.routes = this.route.snapshot.data.routes;
    this.cars = this.route.snapshot.data.cars;
    this.drivers = this.route.snapshot.data.drivers;
  }

  onRemovePassenger(removePassenger: Passenger) {
    this.passengers = this.passengers.filter(
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
    alert('create transfer');
  }
}
