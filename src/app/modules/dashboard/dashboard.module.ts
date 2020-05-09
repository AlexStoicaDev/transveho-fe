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

@NgModule({
  declarations: [routedComponents],
  imports: [
    DashboardRoutingModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    SharedModule
  ],
  providers: [DashboardService]
})
export class DashboardModule {}
