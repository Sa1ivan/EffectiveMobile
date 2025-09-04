import {NgModule} from '@angular/core';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {ApiKeyInterceptor} from './interceptors/api-key.interceptor';

@NgModule({
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ApiKeyInterceptor, multi: true},
  ]
})
export class CoreModule {
}
