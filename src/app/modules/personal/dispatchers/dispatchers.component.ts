import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { MatTableDataSource } from '@angular/material/table';
import { Personal, PersonalRole } from '@transveho-core';
import { of, Subscription } from 'rxjs';
import { DispatchersService } from './service/dispatchers.service';
import { PersonalService } from '../service/personal.service';
import { catchError, startWith, switchMap } from 'rxjs/operators';
import {
  actionsColumn,
  personalColumns,
  userStatusColumn
} from '../columns-to-display';

@Component({
  selector: 'dispatchers',
  templateUrl: './dispatchers.component.html',
  styleUrls: ['./dispatchers.component.scss']
})
export class DispatchersComponent implements OnDestroy, AfterViewInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  pageIndex: number = 0;
  dataSource = new MatTableDataSource<Personal>([]);
  columnsToDisplay = [...personalColumns, userStatusColumn, actionsColumn];
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  loadAllDispatchersSubscription: Subscription;
  performActionsOnDispatcher: Personal = null;

  constructor(
    private dispatchersService: DispatchersService,
    private personalService: PersonalService
  ) {}

  ngAfterViewInit() {
    this.loadAllDispatchersSubscription = this.paginatorComponent.matPaginator.page
      .pipe(
        startWith({}),
        switchMap(() => {
          this.pageIndex = 1;
          return this.dispatchersService.loadAllDispatchers();
        }),
        catchError(() => {
          return of([]);
        })
      )
      .subscribe(dispatchersArray => {
        this.dataSource.data = dispatchersArray;
      });
  }

  openActionPopup(clickEvent, element: Personal) {
    clickEvent.stopPropagation();
    this.performActionsOnDispatcher = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnDispatcher);
  }

  openCreateDispatcherModal() {
    this.personalService
      .openCreateUserModal(PersonalRole.DISPATCHER)
      .afterClosed()
      .subscribe(result => {
        if (result?.action === 'create') {
          this.createDispatcher(result.newUser);
        }
      });
  }

  createDispatcher(newDispatcher: Personal) {
    this.dispatchersService
      .createDispatcher(newDispatcher)
      .subscribe(newDispatcher => {
        this.dataSource.data = this.personalService.addUserAtTheBeggingOfTheArray(
          newDispatcher,
          this.dataSource.data
        );
        this.personalService.openSnackBar(
          `Dispecerul cu username-ul: ${newDispatcher.username} a fost creat!`
        );
      });
  }

  openDeleteDispatcherModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.personalService
        .openDeleteUserModal()
        .afterClosed()
        .subscribe(result => {
          if (result === 'delete') {
            this.deleteDispatcher();
          }
        });
    }
  }

  deleteDispatcher() {
    const username = this.performActionsOnDispatcher.username;
    this.dispatchersService.deleteDispatcher(username).subscribe(() => {
      this.dataSource.data = this.personalService.removeUserFromArray(
        this.getElementIndexInDatasource(),
        this.dataSource.data
      );
      this.personalService.openSnackBar(
        `Dispecerul cu username-ul: ${username} a fost sters!`
      );
    });
  }

  openUpdateDispatcherModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.personalService
        .openUpdateUserModal(this.performActionsOnDispatcher)
        .afterClosed()
        .subscribe(result => {
          if (result?.action === 'update') {
            this.updateDispatcher(result.editedUser);
          }
        });
    }
  }

  updateDispatcher(editedDispatcher: Personal) {
    this.dispatchersService
      .updateDispatcher(
        this.performActionsOnDispatcher.id,
        this.performActionsOnDispatcher.username,
        editedDispatcher
      )
      .subscribe(updatedDispatcher => {
        this.dataSource.data = this.personalService.updateUserInArray(
          this.getElementIndexInDatasource(),
          updatedDispatcher,
          this.dataSource.data
        );
        this.personalService.openSnackBar(
          `Dispecerul cu username-ul: ${updatedDispatcher.username} a fost editat!`
        );
      });
  }

  ngOnDestroy(): void {
    if (this.loadAllDispatchersSubscription) {
      this.loadAllDispatchersSubscription.unsubscribe();
    }
  }
}
