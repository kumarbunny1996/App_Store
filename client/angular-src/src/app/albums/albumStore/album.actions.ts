import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { Albums, AlbumsRes } from './album.model';

export const loadAlbums = createAction('[Album Effects] Load Albums');

export const loadAlbumsSuccess = createAction(
  '[Album Effects] Load Albums Success',
  props<{ albums: AlbumsRes[] }>()
);

export const loadAlbumsFailure = createAction(
  '[Album Effects] Load Albums Failure',
  props<{ error: any }>()
);

// add album
export const addAlbum = createAction(
  '[Album Add Component] Add Album',
  props<{ album: Albums }>()
);

export const addAlbumSuccess = createAction(
  '[Album Add Effect] Add Album Success',
  props<{ album: AlbumsRes }>()
);

export const addAlbumFailure = createAction(
  '[Album Add Effect] Add Album Failure',
  props<{ error: any }>()
);

// update album

export const updateAlbum = createAction(
  '[Post/API] Update Album',
  props<{ album: Update<Albums> }>()
);

export const deleteAlbum = createAction(
  '[Post/API] Delete Album',
  props<{ id: string }>()
);

export const clearAlbums = createAction('[Post/API] Clear Albums');
