import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  private messageSource = new BehaviorSubject<string>('');

  constructor() {}
  getErrorObservable(): Observable<string> {
    return this.messageSource.asObservable();
  }

  getErrorMessage(message: string): void {
    this.messageSource.next(message);
  }
}
