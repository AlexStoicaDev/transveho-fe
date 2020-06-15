import { Injectable } from '@angular/core';
import { Transfer } from '@transveho-core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
import { Observable } from 'rxjs';

@Injectable()
export class DashboardResolver implements Resolve<Transfer[]> {
  constructor(private readonly dashboardService: DashboardService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Transfer[]> {
    return this.dashboardService.getAllTransfers();
  }
}
