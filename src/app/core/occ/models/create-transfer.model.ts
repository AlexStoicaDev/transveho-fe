import { Car } from './car.model';
import { Personal } from './personal.model';
import { Route } from './route.model';
import { Passenger } from '@transveho-core';

/**
 * An interface representing the data necessary for the create transfer stepper
 */
export interface CreateTransferStepperData {
  availableCars: Car[];
  availableDrivers: Personal[];
  selectedRoute: Route;
  selectedPassengers: Passenger[];
  totalNumberOfAdults: number;
  totalNumberOfChildren: number;
  totalNumberOfInfants: number;
}

/**
 * An interface representing the data necessary for creating a new transfer
 */
export interface CreateTransferData {
  selectedCarId: number;
  selectedDriverId: number;
  selectedRouteId: number;
  selectedPassengersIds: number[];
}

export interface SelectedPassengers {
  selectedPassengersIds: string[];
  routeId: string;
}
