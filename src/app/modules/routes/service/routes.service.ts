import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, OccRoutesService } from '@transveho-core';
import {
  CreateRouteModalComponent,
  DeleteModalComponent,
  EditRouteModalComponent
} from '@transveho-shared';
import { Observable } from 'rxjs';

@Injectable()
export class RoutesService {
  constructor(
    private readonly occRoutesService: OccRoutesService,
    public dialog: MatDialog
  ) {}

  public openCreateRouteModal() {
    return this.dialog.open(CreateRouteModalComponent, {
      id: 'createRouteModal',
      width: '500px'
    });
  }

  public openUpdateRouteModal(route: Route) {
    return this.dialog.open(EditRouteModalComponent, {
      width: '500px',
      data: { route }
    });
  }

  public openDeleteRouteModal() {
    return this.dialog.open(DeleteModalComponent, {
      width: '250px'
    });
  }

  public getAllRoutes(): Observable<Route[]> {
    return this.occRoutesService.getAllRoutes();
  }

  public createRoute(newRoute: Route): Observable<Route> {
    return this.occRoutesService.createRoute(newRoute);
  }

  public updateRoute(route: Route): Observable<Route> {
    return this.occRoutesService.updateRoute(route);
  }

  public deleteRoute(routeId: number): Observable<any> {
    return this.occRoutesService.deleteRoute(routeId);
  }
}
