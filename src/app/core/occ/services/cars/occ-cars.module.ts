import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccCarsService } from './occ-cars.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccCarsService]
})
export class OccCarsModule {}
