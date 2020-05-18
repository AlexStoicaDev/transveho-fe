import { NgModule } from '@angular/core';
import { CarsService } from './service/cars.service';
import { CarsResolver } from './resolver/cars.resolver';
import { OccCarsModule } from '@transveho-core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '@transveho-shared';
import { CarsComponent } from './cars.component';

@NgModule({
  imports: [
    OccCarsModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatCheckboxModule,
    MdePopoverModule,
    MatCardModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [CarsService, CarsResolver],
  declarations: [CarsComponent]
})
export class CarsModule {}
