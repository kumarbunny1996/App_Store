import { ErrorInterceptors } from './error.interceptors';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptors } from './spinner.interceptors';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptors, multi: true },
];
