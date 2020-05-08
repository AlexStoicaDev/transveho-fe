import { NgModule } from '@angular/core';
import { AuthenticationService } from './authentication/authentication.service';
//import {AccessGuard} from "./guards";
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { HttpProxyInterceptor } from './interceptors/http-proxy.interceptor';
import { AdminGuard } from './guards/admin.guard';
import { DispatcherGuard } from './guards/dispatcher.guard';
import { AuthenticationGuard } from './guards/authentication.guard';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  entryComponents: [],
  providers: [
    AuthenticationService,
    AdminGuard,
    DispatcherGuard,
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      deps: [AuthenticationService],
      useFactory: authenticationService => {
        return new HttpProxyInterceptor(authenticationService);
      },
      multi: true
    }
  ]
})
export class CoreModule {}
