import { NgModule } from '@angular/core';
import {
  PersonalRoutingModule,
  routedComponents
} from './personal-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { SharedModule } from '@transveho-shared';
import {
  OccDispatchersModule,
  OccDriversModule,
  OccUsersModule
} from '@transveho-core';
import { DriversService } from './drivers/service/drivers.service';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PersonalService } from './service/personal.service';
import { DispatchersService } from './dispatchers/service/dispatchers.service';

@NgModule({
  declarations: [routedComponents],
  imports: [
    OccUsersModule,
    OccDriversModule,
    OccDispatchersModule,
    PersonalRoutingModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatCheckboxModule,
    MdePopoverModule,
    MatCardModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [DriversService, DispatchersService, PersonalService]
})
export class PersonalModule {}
