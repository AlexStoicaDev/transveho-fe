import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { catchError, startWith, switchMap } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { Driver } from '@transveho-core';
import { columnsToDisplay } from './columns-to-display';
import { DriversService } from './service/drivers.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'personal',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnDestroy, AfterViewInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource = new MatTableDataSource<Driver>([]);
  columnsToDisplay = columnsToDisplay;
  headerColumns = columnsToDisplay.map(column => column.elementPropertyName);
  loadAllDriversSubscription: Subscription;
  selection = new SelectionModel<Driver>(true, []);
  perFormActionsOnDriver: Driver = null;

  constructor(private driversService: DriversService) {}

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
  checkboxLabel(row?: Driver): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.data.indexOf(row) + 1
    }`;
  }

  openActionPopup(clickEvent, element: Driver) {
    clickEvent.stopPropagation();
    this.perFormActionsOnDriver = element;
  }

  //TODO add modal for confirmation
  deleteDriver() {
    const elementIndex: number = this.dataSource.data.indexOf(
      this.perFormActionsOnDriver
    );
    if (elementIndex > -1) {
      this.driversService
        .deleteDriver(this.perFormActionsOnDriver.username)
        .subscribe(() => {
          this.dataSource.data = this.dataSource.data
            .slice(0, elementIndex)
            .concat(this.dataSource.data.slice(elementIndex + 1));
        });
    }
  }

  ngOnDestroy(): void {
    if (this.loadAllDriversSubscription) {
      this.loadAllDriversSubscription.unsubscribe();
    }
  }
}
