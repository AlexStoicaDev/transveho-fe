import { NgModule } from '@angular/core';
import { OccRoutesModule } from '@transveho-core';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MdePopoverModule } from '@material-extended/mde';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SharedModule } from '@transveho-shared';
import { RoutesService } from './service/routes.service';
import { RoutesResolver } from './resolver/routes.resolver';
import { RoutesComponent } from './routes.component';

//TODO move all these common imports to app module
@NgModule({
  imports: [
    OccRoutesModule,
    MatTableModule,
    MatToolbarModule,
    CommonModule,
    MatCheckboxModule,
    MdePopoverModule,
    MatCardModule,
    MatSnackBarModule,
    SharedModule
  ],
  providers: [RoutesService, RoutesResolver],
  declarations: [RoutesComponent]
})
export class RoutesModule {}
