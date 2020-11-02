import { loadAlbumsFailure, loadAlbumsSuccess } from './album.actions';
import { Action, createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { Albums } from '../interfaces/albums';


export const albumFeatureKey = 'album';

export interface AlbumState {
    albums: Albums[];
    error: any;
}

export const initialState: AlbumState = {
  albums: undefined,
  error: undefined
};


export const albumReducer = createReducer(
  initialState,
  on(loadAlbumsSuccess, (state, action) => {
      return {
        albums: action.albums
      };
  }),
  on(loadAlbumsFailure, (state, action) => {
     return {
        albums: state.albums,
        error: action.error
     };
  })
);
// selectors
export const selectAlbumFeature = createFeatureSelector<AlbumState>(
  albumFeatureKey
);
export const selectAlbums = createSelector(
  selectAlbumFeature,
  (state: AlbumState) => state.albums
);
