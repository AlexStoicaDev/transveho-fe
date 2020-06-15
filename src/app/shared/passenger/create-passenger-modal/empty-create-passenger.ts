import { Passenger } from '@transveho-core';

export let emptyPassenger: Passenger = {
  status: undefined,
  id: 0,
  numberOfAdults: 0,
  numberOfChildren: 0,
  numberOfCoPassengers: 0,
  numberOfInfants: 0,
  destinationAddress: '',
  email: '',
  firstName: '',
  flightDateTime: undefined,
  flightDetails: '',
  lastName: '',
  paidForTransfer: false,
  paymentMethod: undefined,
  phoneNumber: '',
  pickUpAddress: '',
  pickUpDateTime: undefined,
  returnDestinationAddress: '',
  returnFlightDetails: '',
  returnPickUpAddress: '',
  returnPickUpDateTime: undefined,
  returnTransfer: true,
  routeId: 1,
  transportType: undefined
};
