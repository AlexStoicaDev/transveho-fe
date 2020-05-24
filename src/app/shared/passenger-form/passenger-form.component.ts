import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  Passenger,
  PaymentMethod,
  Route,
  TransportType
} from '@transveho-core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'passenger-form',
  templateUrl: './passenger-form.component.html',
  styleUrls: ['./passenger-form.component.scss']
})
export class PassengerFormComponent implements OnInit {
  @Input()
  passenger: Passenger;
  @Input()
  routes: Route[];

  passengerFormGroup: FormGroup;
  transportTypes: Array<string> = [];
  paymentMethods: Array<string> = [];

  @Output() onSubmitOutput: EventEmitter<any> = new EventEmitter<any>();

  constructor(private formBuilder: FormBuilder) {
    this.addValuesToTransportTypesArray();
    this.addValuesToPaymentMethodsArray();
  }

  ngOnInit(): void {
    this.passengerFormGroup = this.formBuilder.group(this.getControlsConfig());
  }

  addValuesToTransportTypesArray() {
    for (let value in TransportType) {
      if (typeof TransportType[value] === 'number') {
        this.transportTypes.push(value);
      }
    }
  }

  addValuesToPaymentMethodsArray() {
    for (let value in PaymentMethod) {
      if (typeof PaymentMethod[value] === 'number') {
        this.paymentMethods.push(value);
      }
    }
  }

  getControlsConfig() {
    return {
      email: [
        this.passenger.email,
        [Validators.required, Validators.email, Validators.maxLength(30)]
      ],
      lastName: [
        this.passenger.lastName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      firstName: [
        this.passenger.firstName,
        [Validators.required, Validators.minLength(3), Validators.maxLength(12)]
      ],
      phoneNumber: [
        this.passenger.phoneNumber,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]
      ],
      numberOfInfants: [
        this.passenger.numberOfInfants,
        [Validators.required, Validators.min(0)]
      ],
      numberOfAdults: [
        this.passenger.numberOfAdults,
        [Validators.required, Validators.min(1)]
      ],
      numberOfChildren: [
        this.passenger.numberOfChildren,
        [Validators.required, Validators.min(0)]
      ],
      routeId: [this.passenger.routeId, [Validators.required]],
      paymentMethod: [this.passenger.paymentMethod, [Validators.required]],
      transportType: [this.passenger.transportType, [Validators.required]],
      pickUpAddress: [
        this.passenger.pickUpAddress,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ]
      ],
      destinationAddress: [
        this.passenger.destinationAddress,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ]
      ],
      pickUpDateTime: [
        new Date(this.passenger.pickUpDateTime),
        Validators.required
      ],
      flightDateTime: [
        new Date(this.passenger.flightDateTime),
        Validators.required
      ],
      flightDetails: [
        this.passenger.flightDetails,
        [Validators.maxLength(255)]
      ],
      returnPickUpAddress: [
        this.passenger.returnPickUpAddress,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ]
      ],
      returnDestinationAddress: [
        this.passenger.returnDestinationAddress,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(255)
        ]
      ],
      returnPickUpDateTime: [
        new Date(this.passenger.returnPickUpDateTime),
        Validators.required
      ],
      returnFlightDetails: [
        this.passenger.returnFlightDetails,
        [Validators.maxLength(255)]
      ],
      returnTransfer: [this.passenger.returnTransfer.toString()],
      paidForTransfer: [this.passenger.paidForTransfer.toString()]
    };
  }

  isPassengerFormValid(): boolean {
    return this.passengerFormGroup.valid;
  }

  getPassengerFromFormControls(): Passenger {
    const passengerFormControls = this.passengerFormGroup.controls;
    return {
      id: this.passenger.id,
      numberOfAdults: passengerFormControls.numberOfAdults.value,
      numberOfChildren: passengerFormControls.numberOfChildren.value,
      numberOfCoPassengers: 0,
      numberOfInfants: passengerFormControls.numberOfInfants.value,
      destinationAddress: passengerFormControls.destinationAddress.value,
      flightDateTime: passengerFormControls.flightDateTime.value,
      flightDetails: passengerFormControls.flightDetails.value,
      returnDestinationAddress:
        passengerFormControls.returnDestinationAddress.value,
      returnFlightDetails: passengerFormControls.returnFlightDetails.value,
      returnPickUpAddress: passengerFormControls.returnPickUpAddress.value,
      returnPickUpDateTime: passengerFormControls.returnPickUpDateTime.value,
      returnTransfer: passengerFormControls.returnTransfer.value === 'true',
      email: passengerFormControls.email.value,
      firstName: passengerFormControls.firstName.value,
      lastName: passengerFormControls.lastName.value,
      paidForTransfer: passengerFormControls.paidForTransfer.value === 'true',
      paymentMethod: passengerFormControls.paymentMethod.value,
      phoneNumber: passengerFormControls.phoneNumber.value,
      pickUpAddress: passengerFormControls.pickUpAddress.value,
      pickUpDateTime: passengerFormControls.pickUpDateTime.value,
      routeId: passengerFormControls.routeId.value,
      transportType: passengerFormControls.transportType.value
    };
  }

  onSubmit() {
    if (this.isPassengerFormValid()) {
      this.onSubmitOutput.emit();
    }
  }
}
