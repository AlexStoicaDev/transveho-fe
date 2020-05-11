import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccDriversService } from './occ-drivers.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccDriversService]
})
export class OccDriversModule {}
