import { NgModule } from '@angular/core';
import {AuthenticationService} from "./authentication/authentication.service";
import {AccessGuard} from "./guards";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {HttpProxyInterceptor} from "./interceptors/http-proxy.interceptor";

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  exports: [],
  entryComponents: [],
  providers: [AuthenticationService,AccessGuard,{
    provide: HTTP_INTERCEPTORS,
    deps: [AuthenticationService],
    useFactory: authenticationService => {
      return new HttpProxyInterceptor(authenticationService);
    },
    multi: true
  },]
})
export class CoreModule {}
