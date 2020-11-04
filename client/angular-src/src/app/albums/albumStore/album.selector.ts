import { createFeatureSelector, createSelector } from '@ngrx/store';
import { albumsFeatureKey, AlbumState, selectAll } from './album.reducer';

// selectors
export const selectAlbumsFeatureState = createFeatureSelector<AlbumState>(
    albumsFeatureKey
  );

export const selectAlbums = createSelector(selectAlbumsFeatureState, selectAll);
