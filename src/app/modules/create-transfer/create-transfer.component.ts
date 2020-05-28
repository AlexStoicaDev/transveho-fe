import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car, Passenger, Personal, Route } from '@transveho-core';
import { FormBuilder } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';
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
  @ViewChild(MatAccordion) passengersAccordion: MatAccordion;
  selectedCarIndex: number = null; //null
  selectedDriverIndex: number = null; //null
  totalNumberOfAdults = 6;
  totalNumberOfChildren = 5;
  totalNumberOfInfants = 4;
  passengers: Passenger[];
  routes: Route[];
  cars: Car[];
  drivers: Personal[];

  constructor(
    private route: ActivatedRoute,
    private _formBuilder: FormBuilder
  ) {
    this.passengers = this.route.snapshot.data.passengers;
    this.routes = this.route.snapshot.data.routes;
    this.cars = this.route.snapshot.data.cars;
    this.drivers = this.route.snapshot.data.drivers;
  }

  removePassenger(removePassenger: Passenger) {
    this.passengers = this.passengers.filter(
      passenger => passenger !== removePassenger
    );
  }
}
