import { NgModule } from '@angular/core';
import { ArraysService } from './arrays/arrays.service';
import { SnackBarService } from './snack-bar/snack-bar.service';

@NgModule({
  providers: [ArraysService, SnackBarService]
})
export class BusinessServicesModule {}
