import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { MatTableDataSource } from '@angular/material/table';
import { ArraysService, Car, SnackBarService } from '@transveho-core';
import { carsColumns } from './columns-to-display';
import { CarsService } from './service/cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Car>();
  columnsToDisplay = carsColumns;
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  performActionsOnCar: Car = null;

  constructor(
    private carsService: CarsService,
    private arraysService: ArraysService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data.cars;
  }

  openActionPopup(clickEvent, element: Car) {
    clickEvent.stopPropagation();
    this.performActionsOnCar = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnCar);
  }

  openCreateCarModal() {
    this.carsService
      .openCreateCarModal()
      .afterClosed()
      .subscribe(result => {
        if (result?.action === 'create') {
          this.createCar(result.newUser);
        }
      });
  }

  createCar(newCar: Car) {
    this.carsService.createCar(newCar).subscribe(newCar => {
      this.dataSource.data = this.arraysService.addElementAtTheBeggingOfTheArray(
        newCar,
        this.dataSource.data
      );
      this.snackBarService.openSnackBar(
        `Masina cu numarul de inmatriculare: ${newCar.plateNumber} a fost creata!`
      );
    });
  }

  openUpdateCarModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.carsService
        .openUpdateCarModal(this.performActionsOnCar)
        .afterClosed()
        .subscribe(result => {
          if (result?.action === 'update') {
            this.updateCar(result.editedCar);
          }
        });
    }
  }

  updateCar(editedCar: Car) {
    this.carsService
      .updateCar(this.performActionsOnCar.plateNumber, editedCar)
      .subscribe(updatedCar => {
        this.dataSource.data = this.arraysService.updateElementInArray(
          this.getElementIndexInDatasource(),
          updatedCar,
          this.dataSource.data
        );
        this.snackBarService.openSnackBar(
          `Masina cu numarul de inmatriculare: ${updatedCar.plateNumber} a fost editata!`
        );
      });
  }

  openDeleteCarModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.carsService
        .openDeleteCarModal()
        .afterClosed()
        .subscribe(result => {
          if (result === 'delete') {
            this.deleteCar();
          }
        });
    }
  }

  deleteCar() {
    const plateNumber = this.performActionsOnCar.plateNumber;
    this.carsService.deleteCar(plateNumber).subscribe(() => {
      this.dataSource.data = this.arraysService.removeElementFromArray(
        this.getElementIndexInDatasource(),
        this.dataSource.data
      );
      this.snackBarService.openSnackBar(
        `Masina cu numarul de inmatriculare: ${plateNumber} a fost stersa!`
      );
    });
  }

  getStringForBooleanValue(value: boolean): string {
    if (value) {
      return 'DA';
    }
    return 'NU';
  }
}
