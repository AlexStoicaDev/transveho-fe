import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import {
  DeleteModalComponent,
  EditUserModalComponent,
  PaginatorComponent
} from '@transveho-shared';
import { catchError, startWith, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { Personal } from '@transveho-core';
import { columnsToDisplay } from './columns-to-display';
import { DriversService } from './service/drivers.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateUserModalComponent } from '../../../shared/create-user-modal/create-user-modal.component';

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
  performActionsOnDriver: Personal = null;

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

  openActionPopup(clickEvent, element: Personal) {
    clickEvent.stopPropagation();
    this.performActionsOnDriver = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnDriver);
  }

  openCreateDriverModal() {
    if (!this.dialog.getDialogById('createUserModal')) {
      const dialogRef = this.dialog.open(CreateUserModalComponent, {
        id: 'createUserModal',
        width: '500px',
        data: { userType: 'driver' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result?.action === 'create') {
          this.createDriver(result.newUser);
        }
      });
    }
  }

  createDriver(newDriver: Personal) {
    this.driversService.createDriver(newDriver).subscribe(newDriver => {
      this.addDriverAtBeggingOfDataSource(newDriver);
      this.openSnackBar(
        `Soferul cu username-ul: ${newDriver.username} a fost creat!`
      );
    });
  }

  addDriverAtBeggingOfDataSource(driver: Personal) {
    let newDatSource = this.dataSource.data;
    newDatSource.unshift(driver);
    this.dataSource.data = newDatSource;
  }

  openDeleteDriverModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      const dialogRef = this.dialog.open(DeleteModalComponent, {
        width: '250px',
        data: { name: 'user' }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result === 'delete') {
          this.deleteDriver();
        }
      });
    }
  }

  deleteDriver() {
    const username = this.performActionsOnDriver.username;
    this.driversService.deleteDriver(username).subscribe(() => {
      this.removeDriverFromDataSource();
      this.openSnackBar(`Soferul cu username-ul: ${username} a fost sters!`);
    });
  }

  removeDriverFromDataSource() {
    const elementIndex: number = this.getElementIndexInDatasource();
    this.dataSource.data = this.dataSource.data
      .slice(0, elementIndex)
      .concat(this.dataSource.data.slice(elementIndex + 1));
  }

  openUpdateDriverModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      const dialogRef = this.dialog.open(EditUserModalComponent, {
        width: '500px',
        data: { userType: 'driver', user: this.performActionsOnDriver }
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result?.action === 'update') {
          this.updateDriver(result.editedUser);
        }
      });
    }
  }

  updateDriver(editedDriver: Personal) {
    this.driversService
      .updateDriver(
        this.performActionsOnDriver.id,
        this.performActionsOnDriver.username,
        editedDriver
      )
      .subscribe(updatedDriver => {
        this.updateDriverFromDataSource(updatedDriver);
        this.openSnackBar(
          `Soferul cu username-ul: ${updatedDriver.username} a fost editat!`
        );
      });
  }

  updateDriverFromDataSource(updatedDriver: Personal) {
    const elementIndex: number = this.getElementIndexInDatasource();
    this.dataSource.data = this.dataSource.data
      .slice(0, elementIndex)
      .concat([updatedDriver, ...this.dataSource.data.slice(elementIndex + 1)]);
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
