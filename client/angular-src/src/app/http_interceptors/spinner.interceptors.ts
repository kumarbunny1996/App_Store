import { Observable, throwError } from 'rxjs';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SpinnerService } from '../services/spinner.service';
import { ErrorService } from '../services/error.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SpinnerInterceptors implements HttpInterceptor {
  httpReq: HttpRequest<any>;
  constructor(
    private errorService: ErrorService,
    private spinnerService: SpinnerService
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (environment.production) {
      this.httpReq = request.clone({
        url: `/server/app_store_function${request.url}`,
      });
    } else {
      this.httpReq = request;
    }
    console.log(this.httpReq);
    this.spinnerService.requestStarted();
    return this.handler(this.httpReq, next);
  }
  handler(request: HttpRequest<any>, next: HttpHandler): any {
    return next.handle(request).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse) {
            this.spinnerService.requestEnded();
          }
        },
        (error: HttpErrorResponse) => {
          if (error.status === 400) {
            console.log(error.message);
            this.errorService.getErrorMessage(error.message);
            this.spinnerService.resetSpinner();
          }
          return throwError(error);
        }
      )
    );
  }
}
