import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginatorComponent } from '@transveho-shared';
import { MatTableDataSource } from '@angular/material/table';
import { Route, SnackBarService } from '@transveho-core';
import { routesColumns } from './columns-to-display';
import { RoutesService } from './service/routes.service';
import { ActivatedRoute } from '@angular/router';

//TODO refactor this logic to not retrieve all the data on every action
@Component({
  selector: 'routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {
  @ViewChild(PaginatorComponent) paginatorComponent: PaginatorComponent;

  dataSource = new MatTableDataSource<Route>();
  columnsToDisplay = routesColumns;
  headerColumns = this.columnsToDisplay.map(
    column => column.elementPropertyName
  );
  performActionsOnRoute: Route = null;

  constructor(
    private routesService: RoutesService,
    private snackBarService: SnackBarService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.dataSource.data = this.route.snapshot.data.routes;
  }

  openActionPopup(clickEvent, element: Route) {
    clickEvent.stopPropagation();
    this.performActionsOnRoute = element;
  }

  private getElementIndexInDatasource() {
    return this.dataSource.data.indexOf(this.performActionsOnRoute);
  }

  openCreateRouteModal() {
    this.routesService
      .openCreateRouteModal()
      .afterClosed()
      .subscribe(result => {
        if (result?.action === 'create') {
          this.createRoute(result.newUser);
        }
      });
  }

  createRoute(newRoute: Route) {
    this.routesService.createRoute(newRoute).subscribe(newRoute => {
      this.routesService.getAllRoutes().subscribe(routes => {
        this.dataSource.data = routes;
      });
      this.snackBarService.openSnackBar(`Noua ruta a fost creata!`);
    });
  }

  openUpdateRouteModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.routesService
        .openUpdateRouteModal(this.performActionsOnRoute)
        .afterClosed()
        .subscribe(result => {
          if (result?.action === 'update') {
            this.updateRoute(result.editedRoute);
          }
        });
    }
  }

  updateRoute(editedRoute: Route) {
    this.routesService.updateRoute(editedRoute).subscribe(() => {
      this.routesService.getAllRoutes().subscribe(routes => {
        this.dataSource.data = routes;
        this.snackBarService.openSnackBar(`Ruta a fost editata!`);
      });
    });
  }

  openDeleteRouteModal() {
    const elementIndex: number = this.getElementIndexInDatasource();
    if (elementIndex > -1) {
      this.routesService
        .openDeleteRouteModal()
        .afterClosed()
        .subscribe(result => {
          if (result === 'delete') {
            this.deleteRoute();
          }
        });
    }
  }

  deleteRoute() {
    const routeId = this.performActionsOnRoute.id;
    this.routesService.deleteRoute(routeId).subscribe(() => {
      this.routesService.getAllRoutes().subscribe(routes => {
        this.dataSource.data = routes;
        this.snackBarService.openSnackBar(`Ruta a fost stersa!`);
      });
    });
  }

  getStringForBooleanValue(value: boolean): string {
    if (value) {
      return 'DA';
    }
    return 'NU';
  }
}
