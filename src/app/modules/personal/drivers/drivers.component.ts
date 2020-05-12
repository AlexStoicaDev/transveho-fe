import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import {
  DeleteModalComponent,
  EditUserModalComponent,
  PaginatorComponent
} from '@transveho-shared';
import { catchError, startWith, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Personal } from '@transveho-core';
import { columnsToDisplay } from './columns-to-display';
import { DriversService } from './service/drivers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'personal',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnDestroy, AfterViewInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource = new MatTableDataSource<Personal>([]);
  columnsToDisplay = columnsToDisplay;
  headerColumns = columnsToDisplay.map(column => column.elementPropertyName);
  loadAllDriversSubscription: Subscription;
  selection = new SelectionModel<Personal>(true, []);
  perFormActionsOnDriver: Personal = null;

  constructor(
    private driversService: DriversService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngAfterViewInit() {
    this.loadAllDriversSubscription = this.paginatorComponent.matPaginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.pageIndex = 1;
          return this.driversService.loadAllDrivers();
        }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(driversArray => {
        this.dataSource.data = driversArray;
      });
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
  checkboxLabel(row?: Personal): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.data.indexOf(row) + 1
    }`;
  }

  openActionPopup(clickEvent, element: Personal) {
    clickEvent.stopPropagation();
    this.perFormActionsOnDriver = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.perFormActionsOnDriver);
  }

  deleteDriver() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      const dialogRef = this.dialog.open(DeleteModalComponent, {
        width: '250px',
        data: { name: 'user' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'delete') {
          const username = this.perFormActionsOnDriver.username;

          this.driversService
            .deleteDriver(this.perFormActionsOnDriver.username)
            .subscribe(() => {
              this.dataSource.data = this.dataSource.data
                .slice(0, elementIndex)
                .concat(this.dataSource.data.slice(elementIndex + 1));
              this.openSnackBar(
                `Soferul cu username-ul: ${username} a fost sters!`
              );
            });
        }
      });
    }
  }

  updateDriver() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      const dialogRef = this.dialog.open(EditUserModalComponent, {
        width: '500px',
        data: { userType: 'driver', user: this.perFormActionsOnDriver }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result.action === 'update') {
          this.driversService
            .updateDriver(
              this.perFormActionsOnDriver.id,
              this.perFormActionsOnDriver.username,
              result.editedUser
            )
            .subscribe(updatedUser => {
              this.dataSource.data = this.dataSource.data
                .slice(0, elementIndex)
                .concat([
                  updatedUser,
                  ...this.dataSource.data.slice(elementIndex + 1)
                ]);
              this.openSnackBar(
                `Soferul cu username-ul: ${updatedUser.username} a fost editat!`
              );
            });
        }
      });
    }
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {
      duration: 2000
    });
  }

  ngOnDestroy(): void {
    if (this.loadAllDriversSubscription) {
      this.loadAllDriversSubscription.unsubscribe();
    }
  }
}
