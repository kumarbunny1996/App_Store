import { createAction, props } from '@ngrx/store';
import { Albums } from '../interfaces/albums';

export const loadAlbums = createAction(
  '[Album Effects] Load Albums'
);

export const loadAlbumsSuccess = createAction(
  '[Album Effects] Load Albums Success',
  props<{ albums: Albums[] }>()
);

export const loadAlbumsFailure = createAction(
  '[Album Effects] Load Albums Failure',
  props<{ error: any }>()
);

