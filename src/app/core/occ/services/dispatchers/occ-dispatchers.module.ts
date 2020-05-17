import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OccDispatchersService } from './occ-dispatchers.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccDispatchersService]
})
export class OccDispatchersModule {}
