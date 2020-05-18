import { Injectable } from '@angular/core';
import { Car, OccCarsService } from '@transveho-core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  CreateCarModalComponent,
  DeleteModalComponent,
  EditCarModalComponent
} from '@transveho-shared';

@Injectable()
export class CarsService {
  constructor(
    private readonly occCarsService: OccCarsService,
    public dialog: MatDialog
  ) {}

  public openCreateCarModal() {
    return this.dialog.open(CreateCarModalComponent, {
      id: 'createCarModal',
      width: '1000px'
    });
  }

  public openUpdateCarModal(car: Car) {
    return this.dialog.open(EditCarModalComponent, {
      width: '1000px',
      data: { car }
    });
  }

  public openDeleteCarModal() {
    return this.dialog.open(DeleteModalComponent, {
      width: '250px'
    });
  }

  public getAllCars(): Observable<Car[]> {
    return this.occCarsService.getAllCars();
  }

  public createCar(newCar: Car): Observable<Car> {
    return this.occCarsService.createCar(newCar);
  }

  public updateCar(plateNumber: string, car: Car): Observable<Car> {
    return this.occCarsService.updateCar(plateNumber, car);
  }

  public deleteCar(carPlateNumber: string): Observable<any> {
    return this.occCarsService.deleteCar(carPlateNumber);
  }
}
