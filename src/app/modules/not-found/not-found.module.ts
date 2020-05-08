import { NgModule } from '@angular/core';
import {
  NotFoundRoutingModule,
  routedComponents
} from './not-found-router.module';

@NgModule({
  declarations: [routedComponents],
  imports: [NotFoundRoutingModule]
})
export class NotFoundModule {}
