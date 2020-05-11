import {AfterViewInit, ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {PaginatorComponent} from '@transveho-shared';
import {catchError, startWith, switchMap} from 'rxjs/operators';
import {of, Subscription} from 'rxjs';
import {SelectionModel} from '@angular/cdk/collections';
import {Driver} from '@transveho-core';
import {columnsToDisplay} from './columns-to-display';
import {DriversService} from './service/drivers.service';

@Component({
  selector: 'personal',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnDestroy, AfterViewInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource: Driver[];
  columnsToDisplay = columnsToDisplay;
  headerColumns = columnsToDisplay.map(column => column.elementPropertyName);
  dispatcherServiceSubscription: Subscription;
  selection = new SelectionModel<Driver>(true, []);

  constructor(
    private driversService: DriversService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewInit() {
    this.dispatcherServiceSubscription = this.paginatorComponent.matPaginator.page
      .pipe(
        startWith({}),
        switchMap(() => {this.pageIndex =1;
       return  this.driversService.loadAllDrivers();
          // return this.driversService.loadPaginatedEntries(
          //   this.paginatorComponent.matPaginator.pageIndex
          // );
        }),
        // map((page: PersonalEntriesPage) => {
        //   this.pageIndex = page.pageNumber;
        //   return page.dispatcherEntries;
        // }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(dispatcherEntries => {
        this.dataSource = dispatcherEntries}
        );
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Driver): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${
      this.dataSource.indexOf(row) + 1
    }`;
  }

  ngOnDestroy(): void {
    if (this.dispatcherServiceSubscription) {
      this.dispatcherServiceSubscription.unsubscribe();
    }
    this.cdRef.detach();
  }

  openActionPopup(clickEvent) {
    clickEvent.stopPropagation();
  }
}
