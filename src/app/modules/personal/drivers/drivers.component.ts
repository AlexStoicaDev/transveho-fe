import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { Personal, PersonalRole } from '@transveho-core';
import { DriversService } from './service/drivers.service';
import { MatTableDataSource } from '@angular/material/table';
import { PersonalService } from '../service/personal.service';
import {
  actionsColumn,
  extraColumnsForDriver,
  personalColumns,
  userStatusColumn
} from '../columns-to-display';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'personal',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Personal>();
  columnsToDisplay = [
    ...personalColumns,
    ...extraColumnsForDriver,
    userStatusColumn,
    actionsColumn
  ];
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  performActionsOnDriver: Personal = null;

  constructor(
    private driversService: DriversService,
    private personalService: PersonalService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data.drivers;
  }

  openActionPopup(clickEvent, element: Personal) {
    clickEvent.stopPropagation();
    this.performActionsOnDriver = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnDriver);
  }

  openCreateDriverModal() {
    this.personalService
      .openCreateUserModal(PersonalRole.DRIVER)
      .afterClosed()
      .subscribe(result => {
        if (result?.action === 'create') {
          this.createDriver(result.newUser);
        }
      });
  }

  createDriver(newDriver: Personal) {
    this.driversService.createDriver(newDriver).subscribe(newDriver => {
      this.dataSource.data = this.personalService.addUserAtTheBeggingOfTheArray(
        newDriver,
        this.dataSource.data
      );
      this.personalService.openSnackBar(
        `Soferul cu username-ul: ${newDriver.username} a fost creat!`
      );
    });
  }

  openDeleteDriverModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.personalService
        .openDeleteUserModal()
        .afterClosed()
        .subscribe(result => {
          if (result === 'delete') {
            this.deleteDriver();
          }
        });
    }
  }

  deleteDriver() {
    const username = this.performActionsOnDriver.username;
    this.driversService.deleteDriver(username).subscribe(() => {
      this.dataSource.data = this.personalService.removeUserFromArray(
        this.getElementIndexInDatasource(),
        this.dataSource.data
      );
      this.personalService.openSnackBar(
        `Soferul cu username-ul: ${username} a fost sters!`
      );
    });
  }

  openUpdateDriverModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.personalService
        .openUpdateUserModal(this.performActionsOnDriver)
        .afterClosed()
        .subscribe(result => {
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
        this.dataSource.data = this.personalService.updateUserInArray(
          this.getElementIndexInDatasource(),
          updatedDriver,
          this.dataSource.data
        );
        this.personalService.openSnackBar(
          `Soferul cu username-ul: ${updatedDriver.username} a fost editat!`
        );
      });
  }
}
