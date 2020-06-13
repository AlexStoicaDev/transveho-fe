//TODO create a module for authentication, interceptors,guards etc

import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AdminGuard } from './guards/admin.guard';
import { DispatcherGuard } from './guards/dispatcher.guard';
import { AuthenticationService } from './authentication.service';
import { HttpProxyInterceptor } from '../interceptors/http-proxy.interceptor';

@NgModule({
  imports: [HttpClientModule],
  entryComponents: [],
  providers: [
    AdminGuard,
    DispatcherGuard,
    AuthenticationGuard,
    AuthenticationService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpProxyInterceptor,
      multi: true,
      deps: [AuthenticationService]
    }
  ]
})
export class AuthenticationModule {}
