import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@transveho-core';
import { AuthenticationPagesModule } from './modules/authentication/authentication-pages.module';
import { SharedModule } from './shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    MatIconModule,
    AuthenticationPagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
