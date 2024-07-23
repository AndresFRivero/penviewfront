import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { HttpInterceptorService } from './services/http/http-interceptor.service';
import { ErrorInterceptorService } from './services/http/error-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
      provideRouter(routes),
      provideHttpClient(),
      {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true},
      {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptorService, multi: true}]
};
