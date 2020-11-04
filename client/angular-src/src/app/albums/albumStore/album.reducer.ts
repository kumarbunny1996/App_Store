import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { AlbumsRes } from './album.model';
import * as AlbumActions from './album.actions';

export const albumsFeatureKey = 'albums';

export interface AlbumState extends EntityState<AlbumsRes> {
  // additional entities state properties
  error: any;
}
export function selectAlbumId(a: AlbumsRes): string {
  // In this case this would be optional since primary key is id
  return a.ROWID;
}

export const adapter: EntityAdapter<AlbumsRes> = createEntityAdapter<AlbumsRes>({
  selectId: selectAlbumId,
});

export const initialState: AlbumState = adapter.getInitialState({
  // additional entity state properties
  error: undefined,
});


export const albumReducer = createReducer(
  initialState,
  on(AlbumActions.addAlbumSuccess,
    (state, action) => adapter.addOne(action.album, state)
  ),
  on(AlbumActions.addAlbumFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(AlbumActions.loadAlbumsSuccess,
    (state, action) => adapter.setAll(action.albums, state)
  ),
  on(AlbumActions.loadAlbumsFailure,
    (state, action) => {
      return {
        ...state,
        error: action.error,
      };
    }
  ),
  on(AlbumActions.updateAlbum,
    (state, action) => adapter.updateOne(action.album, state)
  ),

  on(AlbumActions.deleteAlbum,
    (state, action) => adapter.removeOne(action.id, state)
  ),

  on(AlbumActions.clearAlbums,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

