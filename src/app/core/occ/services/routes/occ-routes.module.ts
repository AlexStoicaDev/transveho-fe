import { NgModule } from '@angular/core';
import { OccRoutesService } from './occ-routes.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule],
  providers: [OccRoutesService]
})
export class OccRoutesModule {}
