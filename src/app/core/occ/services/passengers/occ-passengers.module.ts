import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccPassengersService } from './occ-passengers.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccPassengersService]
})
export class OccPassengersModule {}
