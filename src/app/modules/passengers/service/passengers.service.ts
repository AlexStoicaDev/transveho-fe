import { Injectable } from '@angular/core';
import {
  OccPassengersService,
  OccRoutesService,
  Passenger,
  Route
} from '@transveho-core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  CreatePassengerModalComponent,
  DeleteModalComponent,
  EditPassengerModalComponent
} from '@transveho-shared';

@Injectable()
export class PassengersService {
  constructor(
    private readonly occRoutesService: OccRoutesService,
    private readonly occPassengersService: OccPassengersService,
    public dialog: MatDialog
  ) {}

  public getAllRoutes(): Observable<Route[]> {
    return this.occRoutesService.getAllRoutes();
  }

  public openCreatePassengerModal(routes: Route[]) {
    return this.dialog.open(CreatePassengerModalComponent, {
      id: 'createPassengerModal',
      width: '1000px',
      data: { routes }
    });
  }

  public openUpdatePassengerModal(passenger: Passenger) {
    return this.dialog.open(EditPassengerModalComponent, {
      width: '1000px',
      data: { passenger }
    });
  }

  public openDeletePassengerModal() {
    return this.dialog.open(DeleteModalComponent, {
      width: '250px'
    });
  }

  public getAllPassengers(): Observable<Passenger[]> {
    return this.occPassengersService.getAllPassengers();
  }

  public createPassenger(passenger: Passenger): Observable<Passenger> {
    return this.occPassengersService.createPassenger(passenger);
  }

  public updatePassenger(passenger: Passenger): Observable<Passenger> {
    return this.occPassengersService.updatePassenger(passenger);
  }

  public deletePassenger(passengerId: number): Observable<void> {
    return this.occPassengersService.deletePassenger(passengerId);
  }
}
