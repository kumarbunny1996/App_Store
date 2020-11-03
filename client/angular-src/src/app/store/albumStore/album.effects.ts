import { AlbumsService } from '../../services/albums.service';
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
          map(res => FromAlbumActions.loadAlbumsSuccess({ albums: res.listArr })),
          catchError(error => of( FromAlbumActions.loadAlbumsFailure({error: error.error})))
        )
      )
    )
  );
  addAlbum$ = createEffect(() =>
  this.actions$.pipe(
    ofType(FromAlbumActions.addAlbum),
    mergeMap((action) => this.albumService.addAlbum(action.album)
      .pipe(
        map(resObj => FromAlbumActions.addAlbumSuccess({ album: resObj.albumData })),
        catchError(error => of( FromAlbumActions.addAlbumFailure({error: error.error})))
      )
    )
  )
);

  constructor(
    private actions$: Actions,
    private albumService: AlbumsService
  ) {}

}
