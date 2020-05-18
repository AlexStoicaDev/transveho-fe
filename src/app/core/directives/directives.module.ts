import { NgModule } from '@angular/core';
import { NumbersOnlyDirective } from './numbers-only.directive';

@NgModule({
  providers: [NumbersOnlyDirective],
  declarations: [NumbersOnlyDirective],
  exports: [NumbersOnlyDirective]
})
export class DirectivesModule {}
