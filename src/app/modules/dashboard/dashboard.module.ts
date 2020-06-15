import { NgModule } from '@angular/core';
import {
  DashboardRoutingModule,
  routedComponents
} from './dashboard-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { DashboardService } from './service/dashboard.service';
import { SharedModule } from '@transveho-shared';
import { DashboardResolver } from './resolver/dashboard.resolver';

@NgModule({
  declarations: [routedComponents],
  imports: [
    DashboardRoutingModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    SharedModule
  ],
  providers: [DashboardService, DashboardResolver]
})
export class DashboardModule {}
