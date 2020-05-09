import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [RouterModule],
  declarations: [FooterComponent, TopNavComponent],
  exports: [FooterComponent, TopNavComponent]
})
export class SharedModule {}
