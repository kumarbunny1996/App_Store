import { Observable, of } from 'rxjs';
import { PreloadingStrategy, Route } from '@angular/router';

export class CustomPreloadStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? load() : of(null);
  }
}
