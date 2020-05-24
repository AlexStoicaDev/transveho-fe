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
import {
  detailsColumnsToDisplay,
  passengersColumns
} from './columns-to-display';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state(
        'expanded',
        style({
          height: '*'
        })
      ),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      )
    ])
  ]
})
export class PassengersComponent implements OnInit {
  //TODO fix styling for laptop screen and do not show extra columns for return transfer if there is no return transfer
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Passenger>();
  columnsToDisplay = passengersColumns;
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  detailsColumnsToDisplay = detailsColumnsToDisplay;
  expandedElement: Passenger | null;
  performActionsOnPassenger: Passenger = null;
  selection = new SelectionModel<Passenger>(true, []);
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

  getRouteText(routeId: number): string {
    const route: Route = this.availableRoutes.find(
      route => route.id === routeId
    );
    if (route) {
      return (
        route.fromLocation.toLocaleLowerCase() +
        ' - ' +
        route.toLocation.toLocaleLowerCase()
      );
    }
    return '';
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Passenger): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.data.indexOf(row) + 1
    }`;
  }
}
