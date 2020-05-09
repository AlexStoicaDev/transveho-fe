import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { DashboardService } from './service/dashboard.service';
import { of, Subscription } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import {
  columnsToDisplay,
  detailsColumnsToDisplay
} from './columns-to-display';
import { DashboardEntry } from '@transveho-core';
import { PaginatorComponent } from '../../shared/paginator/paginator.component';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.scss'],
  templateUrl: './dashboard.component.html',
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
export class DashboardComponent implements OnDestroy, AfterViewChecked {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource: DashboardEntry[];
  expandedElement: DashboardEntry | null;
  columnsToDisplay = columnsToDisplay;
  detailsColumnsToDisplay = detailsColumnsToDisplay;
  headerColumns = columnsToDisplay.map(column => column.elementPropertyName);
  dashboardServiceSubscription: Subscription;

  constructor(
    private dashboardService: DashboardService,
    private cdRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked() {
    this.dashboardServiceSubscription = this.paginatorComponent.matPaginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          return this.dashboardService.loadPaginatedEntries(
            this.paginatorComponent.matPaginator.pageIndex
          );
        }),
        map(page => {
          this.pageIndex = page.pageNumber;
          return page.dashboardEntries;
        }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(dashboardEntries => (this.dataSource = dashboardEntries));
    this.cdRef.detectChanges();
  }

  shouldHaveBlueBorder(element: DashboardEntry): boolean {
    const elementIndex = this.dataSource.indexOf(element);
    return (
      element === this.expandedElement ||
      (this.dataSource[elementIndex + 1] &&
        this.dataSource[elementIndex + 1] === this.expandedElement)
    );
  }

  ngOnDestroy(): void {
    if (this.dashboardServiceSubscription) {
      this.dashboardServiceSubscription.unsubscribe();
    }
  }
}
