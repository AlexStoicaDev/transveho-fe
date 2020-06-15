import { Injectable } from '@angular/core';
import { AuthenticationService } from '../../../../authentication';
import { Observable, of, pipe } from 'rxjs';
import {
  Car,
  EngineType,
  Passenger,
  PaymentMethod,
  Route,
  Transfer
} from '../../../models';
import { DatePipe } from '@angular/common';

@Injectable()
export class OccDriverTransferService {
  constructor(private authenticationService: AuthenticationService) {}

  private getCurrentUserUsername(): string {
    return this.authenticationService.currentUserValue.username;
  }

  getCurrentTransfer(): Observable<Transfer> {
    // const pipe = new DatePipe('en-US'); // Use your own locale
    //
    // const now = Date.now();
    // const myFormattedDate = pipe.transform(now, 'shortDate');

    const mockPassenger: Passenger = {
      status: undefined,
      destinationAddress:
        'Timisoara Airport, Strada Aeroportului 2, Ghiroda 307200, Romania',
      email: 'rtineman1@gmail.com',
      firstName: 'Raynard',
      flightDateTime: new Date(),
      flightDetails: 'Quisque porta volutpat erat.',
      id: 0,
      lastName: 'Tineman',
      numberOfAdults: 2,
      numberOfChildren: 1,
      numberOfCoPassengers: 1,
      numberOfInfants: 1,
      paidForTransfer: true,
      paymentMethod: PaymentMethod.Online,
      phoneNumber: '0735871975',
      pickUpAddress: 'Strada Dinu Lipatti 2, Timișoara, Romania',
      pickUpDateTime: new Date().toDateString(),
      returnDestinationAddress: '',
      returnFlightDetails: '',
      returnPickUpAddress: '',
      returnPickUpDateTime: undefined,
      returnTransfer: false,
      routeId: 0,
      transportType: undefined
    };
    const mockCar: Car = {
      chassisNumber: 'ABCDEFGHJKLASD',
      engineType: 1,
      huvignetteExpirationDate: new Date(),
      id: 0,
      inTransit: false,
      itpExpirationDate: new Date(),
      model: 'Silverado 3500',
      numberOfSeats: 8,
      others: '',
      plateNumber: 'TM 97 NFS',
      rcaExpirationDate: new Date(),
      rented: false,
      rovignetteExpirationDate: new Date(),
      status: undefined
    };
    const mockRoute: Route = {
      distanceInKm: 0,
      fromLocation: 'TIMISOARA',
      id: 0,
      notes: '',
      priceInEur: 0,
      priceInRon: 0,
      returnRouteId: 0,
      toLocation: 'BUDAPESTA',
      transitRoute: true
    };
    const mockTransfer: Transfer = {
      totalNumberOfAdults: 2,
      totalNumberOfChildren: 1,
      totalNumberOfInfants: 1,
      route: mockRoute,
      car: mockCar,
      driver: undefined,
      id: 0,
      passengers: [mockPassenger]
    };
    return of(mockTransfer);
  }
}
