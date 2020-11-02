import { AlbumsService } from './../services/albums.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType  } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as FromAlbumActions from './album.actions';


@Injectable()
export class AlbumEffects {

  @Effect()
  loadAlbums$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FromAlbumActions.loadAlbums),
      mergeMap(() => this.albumService.getAlbums()
        .pipe(
          map(albums => FromAlbumActions.loadAlbumsSuccess({ albums })),
          catchError(error => of( FromAlbumActions.loadAlbumsFailure({error})))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private albumService: AlbumsService
  ) {}

}
