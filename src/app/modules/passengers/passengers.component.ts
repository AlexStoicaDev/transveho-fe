import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ArraysService,
  Passenger,
  Route,
  SnackBarService
} from '@transveho-core';
import { PassengersService } from './service/passengers.service';
import { ActivatedRoute } from '@angular/router';
import { PaginatorComponent } from '@transveho-shared';
import { MatTableDataSource } from '@angular/material/table';
import { passengersColumns } from './columns-to-display';

@Component({
  selector: 'passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Passenger>();
  columnsToDisplay = passengersColumns;
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  performActionsOnPassenger: Passenger = null;
  availableRoutes: Route[] = [];

  constructor(
    private readonly passengersService: PassengersService,
    private arraysService: ArraysService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data.passengers;
    this.availableRoutes = this.route.snapshot.data.routes;
  }

  openActionPopup(clickEvent, element: Passenger) {
    clickEvent.stopPropagation();
    this.performActionsOnPassenger = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnPassenger);
  }

  //TODO add unsubscribe to all subscriptions
  openCreatePassengerModal() {
    this.passengersService
      .openCreatePassengerModal(this.availableRoutes)
      .afterClosed()
      .subscribe(result => {
        if (result?.action === 'create') {
          this.createPassenger(result.newPassenger);
        }
      });
  }

  createPassenger(newPassenger: Passenger) {
    this.passengersService
      .createPassenger(newPassenger)
      .subscribe(newPassenger => {
        this.snackBarService.openSnackBar(
          `Pasagerul cu numele: ${newPassenger.firstName} a fost creata!`
        );
      });
  }

  openUpdatePassengerModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.passengersService
        .openUpdatePassengerModal(
          this.performActionsOnPassenger,
          this.availableRoutes
        )
        .afterClosed()
        .subscribe(result => {
          if (result?.action === 'update') {
            this.updatePassenger(result.editedPassenger);
          }
        });
    }
  }

  updatePassenger(editedPassenger: Passenger) {
    this.passengersService
      .updatePassenger(editedPassenger)
      .subscribe(updatedPassenger => {
        this.dataSource.data = this.arraysService.updateElementInArray(
          this.getElementIndexInDatasource(),
          updatedPassenger,
          this.dataSource.data
        );
        this.snackBarService.openSnackBar(
          `Pasagerul cu numele: ${updatedPassenger.firstName} a fost editat!`
        );
      });
  }

  openDeletePassengerModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.passengersService
        .openDeletePassengerModal()
        .afterClosed()
        .subscribe(result => {
          if (result === 'delete') {
            this.deletePassenger();
          }
        });
    }
  }

  deletePassenger() {
    const passengerId = this.performActionsOnPassenger.id;
    this.passengersService.deletePassenger(passengerId).subscribe(() => {
      this.dataSource.data = this.arraysService.removeElementFromArray(
        this.getElementIndexInDatasource(),
        this.dataSource.data
      );
      this.snackBarService.openSnackBar(
        `Pasagerul cu numele: ${this.performActionsOnPassenger.firstName} a fost sters!`
      );
      this.performActionsOnPassenger = null;
    });
  }

  getStringForBooleanValue(value: boolean): string {
    if (value) {
      return 'DA';
    }
    return 'NU';
  }
}
