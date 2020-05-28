import { NgModule } from '@angular/core';
import { OccPassengersModule } from '@transveho-core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '@transveho-shared';
import { PassengersComponent } from './passengers.component';
import { PassengersService } from './service/passengers.service';
import { PassengersResolver } from './resolver/passengers.resolver';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    OccPassengersModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatCheckboxModule,
    MdePopoverModule,
    MatCardModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [PassengersService, PassengersResolver],
  declarations: [PassengersComponent]
})
export class PassengersModule {}
